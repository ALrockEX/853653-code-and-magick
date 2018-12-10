'use strict';
(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var userNameFocus = false;
  var opened = false;
  var firstPopupPosition = {
    x: window.util.userDialog.style.left,
    y: window.util.userDialog.style.top
  };
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.util.userDialog.querySelector('.setup-close');
  var setupSubmit = window.util.userDialog.querySelector('.setup-submit');

  var onUserNameFocus = function () {
    userNameFocus = true;
  };

  var onUserNameBlur = function () {
    userNameFocus = false;
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (!userNameFocus) {
        closePopup();
      }
    }
  };

  var onSubmit = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(window.util.form),
        window.requestDisplay.onSave,
        window.requestDisplay.onError);
  };

  var onSubmitClick = function (evt) {
    onSubmit(evt);
  };

  var onSubmitEnterPress = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      onSubmit(evt);
    }
  };

  var onUserNameInvalid = function () {
    if (window.util.userNameInput.validity.tooShort) {
      window.util.userNameInput.setCustomValidity(
          'Имя должно состоять минимум из 2-х символов');
    } else if (window.util.userNameInput.validity.tooLong) {
      window.util.userNameInput.setCustomValidity(
          'Имя не должно превышать 25-ти символов');
    } else if (window.util.userNameInput.validity.valueMissing) {
      window.util.userNameInput.setCustomValidity(
          'Обязательное поле');
    } else {
      window.util.userNameInput.setCustomValidity('');
    }
  };

  var openPopup = function () {
    window.util.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.util.userNameInput.addEventListener('invalid', onUserNameInvalid);
    window.util.userNameInput.addEventListener('focus', onUserNameFocus);
    window.util.userNameInput.addEventListener('blur', onUserNameBlur);
    setupSubmit.addEventListener('click', onSubmitClick);
    setupSubmit.addEventListener('keydown', onSubmitEnterPress);

    if (!opened) {
      window.backend.load(window.requestDisplay.onLoad,
          window.requestDisplay.onError);
    }
    opened = true;
  };

  var closePopup = function () {
    window.util.userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.util.userNameInput.removeEventListener('invalid', onUserNameInvalid);
    window.util.userNameInput.removeEventListener('focus', onUserNameFocus);
    window.util.userNameInput.removeEventListener('blur', onUserNameBlur);
    setupSubmit.removeEventListener('click', onSubmitClick);
    setupSubmit.removeEventListener('keydown', onSubmitEnterPress);
    window.util.userDialog.style.left = firstPopupPosition.x;
    window.util.userDialog.style.top = firstPopupPosition.y;
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

})();
