'use strict';
(function () {

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };
  var renderSimilarList = function () {
    for (var i = 0; i < window.mockWizards.length; i++) {
      fragment.appendChild(renderWizard(window.mockWizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.util.userDialog.querySelector('.setup-similar')
        .classList.remove('hidden');
  };

  document.querySelector('.setup-similar').classList.remove('hidden');

  renderSimilarList();
})();
