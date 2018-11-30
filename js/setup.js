'use strict';

var lengthSimilars = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var userNameFocus = false;
var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');
var setupSubmit = userDialog.querySelector('.setup-submit');
var form = userDialog.querySelector('.setup-wizard-form');
var setupWizardCoat = form.querySelector('.setup-wizard .wizard-coat');
var setupWizardEyes = form.querySelector('.setup-wizard .wizard-eyes');
var setupFireball = form.querySelector('.setup-fireball-wrap');
var inputWizardCoat = form.querySelector('.coat-color');
var inputWizardEyes = form.querySelector('.eyes-color');
var inputFireball = form.querySelector('.fireball-color');

var mockWizards = [];
var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var familyNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballs = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];


var mockGenerate = function (mockLength) {
  for (var i = 0; i < mockLength; i++) {
    mockWizards[i] = {
      name: names[Math.floor(Math.random() * names.length)] +
          ' ' +
          familyNames[Math.floor(Math.random() * familyNames.length)],
      coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
      eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)]
    };
  }
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderSimilarList = function () {
  for (var i = 0; i < mockWizards.length; i++) {
    fragment.appendChild(renderWizard(mockWizards[i]));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (!userNameFocus) {
      closePopup();
    }
  }
};

var onSubmitClick = function () {
  form.submit();
};

var onSubmitEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    form.submit();
  }
};

var onUserNameFocus = function () {
  userNameFocus = true;
};

var onUserNameBlur = function () {
  userNameFocus = false;
};

var onUserNameInvalid = function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  userNameInput.addEventListener('invalid', onUserNameInvalid);
  userNameInput.addEventListener('focus', onUserNameFocus);
  userNameInput.addEventListener('blur', onUserNameBlur);
  setupSubmit.addEventListener('click', onSubmitClick);
  setupSubmit.addEventListener('keydown', onSubmitEnterPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  userNameInput.removeEventListener('invalid', onUserNameInvalid);
  userNameInput.removeEventListener('focus', onUserNameFocus);
  userNameInput.removeEventListener('blur', onUserNameBlur);
  setupSubmit.removeEventListener('click', onSubmitClick);
  setupSubmit.removeEventListener('keydown', onSubmitEnterPress);
};

// ==================================================================

mockGenerate(lengthSimilars);

document.querySelector('.setup-similar').classList.remove('hidden');

renderSimilarList();

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

setupWizardCoat.addEventListener('click', function () {
  var randomCoatColor = coatColors[Math.floor(Math.random() *
    coatColors.length)];
  setupWizardCoat.style.fill = randomCoatColor;
  inputWizardCoat.value = randomCoatColor;
});

setupWizardEyes.addEventListener('click', function () {
  var randomEyesColor = eyesColors[Math.floor(Math.random() *
    eyesColors.length)];
  setupWizardEyes.style.fill = randomEyesColor;
  inputWizardEyes.value = randomEyesColor;
});

setupFireball.addEventListener('click', function () {
  var randomFireball = fireballs[Math.floor(Math.random() *
    fireballs.length)];
  setupFireball.style.background = randomFireball;
  inputFireball.value = randomFireball;
});

