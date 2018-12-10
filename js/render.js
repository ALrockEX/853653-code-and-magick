'use strict';
(function () {

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  var makeSet = function (wizards) {
    var set = [];
    var index;

    for (var i = 0; i < window.util.lengthSimilars; i++) {
      index = Math.floor(Math.random() * (wizards.length - i));
      set[i] = wizards[index];
      wizards[index] = wizards[wizards.length - 1 - i];
      wizards[wizards.length - 1 - i] = set[i];
    }
    return set;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };
  var renderSimilarList = function (wizards) {
    var wizardSet = makeSet(wizards);
    for (var i = 0; i < wizardSet.length; i++) {
      fragment.appendChild(renderWizard(wizardSet[i]));
    }
    similarListElement.appendChild(fragment);

    window.util.userDialog.querySelector('.setup-similar')
        .classList.remove('hidden');

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = renderSimilarList;

})();
