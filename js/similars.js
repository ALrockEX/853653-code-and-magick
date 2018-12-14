'use strict';
(function () {

  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.util.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.util.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.render(wizards.slice().
      sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
        }
        return rankDiff;
      }));
  };

  var loadCase = function (response) {
    wizards = response;
    updateWizards();
  };

  var saveCase = function () {
    window.util.userDialog.classList.add('hidden');
  };

  var errorCase = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.similars = {
    update: updateWizards,
    onLoad: loadCase,
    onSave: saveCase,
    onError: errorCase
  };

})();
