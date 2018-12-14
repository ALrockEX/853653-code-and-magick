'use strict';
(function () {

  var popup = document.querySelector('.setup');

  window.util = {
    coatColor: undefined,
    eyesColor: undefined,
    lengthSimilars: 4,
    userDialog: popup,
    form: popup.querySelector('.setup-wizard-form'),
    userNameInput: popup.querySelector('.setup-user-name'),

    coatColors: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    eyesColors: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ]
  };

})();
