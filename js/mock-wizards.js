'use strict';
(function () {
  var lengthSimilars = 4;
  var mock = [];
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
  var mockGenerate = function (mockLength) {
    for (var i = 0; i < mockLength; i++) {
      mock[i] = {
        name: names[Math.floor(Math.random() * names.length)] +
            ' ' +
            familyNames[Math.floor(Math.random() * familyNames.length)],
        coatColor: window.util.coatColors[Math.floor(Math.random() *
          window.util.coatColors.length)],
        eyesColor: window.util.eyesColors[Math.floor(Math.random() *
          window.util.eyesColors.length)]
      };
    }
  };
  mockGenerate(lengthSimilars);
  window.mockWizards = mock;
})();
