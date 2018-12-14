'use strict';
(function () {
  var randomCoatColor;
  var randomEyesColor;
  var setupWizardCoat = window.util.form.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = window.util.form.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = window.util.form.querySelector('.setup-fireball-wrap');
  var inputWizardCoat = window.util.form.querySelector('.setup-wizard-appearance')
    .querySelectorAll('input')[0];
  var inputWizardEyes = window.util.form.querySelector('.setup-wizard-appearance')
    .querySelectorAll('input')[1];
  var inputFireball = window.util.form.querySelector('.setup-fireball-wrap')
    .querySelector('input');
  var fireballs = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var timeOutCoat = window.debounce(function () {
    window.util.coatColor = randomCoatColor;
    window.similars.update();
  });

  var timeOutEyes = window.debounce(function () {
    window.util.eyesColor = randomEyesColor;
    window.similars.update();
  });


  setupWizardCoat.addEventListener('click', function () {
    randomCoatColor = window.util.coatColors[Math.floor(Math.random() *
      window.util.coatColors.length)];
    setupWizardCoat.style.fill = randomCoatColor;
    inputWizardCoat.value = randomCoatColor;
    timeOutCoat();
  });

  setupWizardEyes.addEventListener('click', function () {
    randomEyesColor = window.util.eyesColors[Math.floor(Math.random() *
      window.util.eyesColors.length)];
    setupWizardEyes.style.fill = randomEyesColor;
    inputWizardEyes.value = randomEyesColor;
    timeOutEyes();
  });

  setupFireball.addEventListener('click', function () {
    var randomFireball = fireballs[Math.floor(Math.random() *
      fireballs.length)];
    setupFireball.style.background = randomFireball;
    inputFireball.value = randomFireball;
  });

})();
