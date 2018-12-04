'use strict';
(function () {

  var setupWizardCoat = window.util.form.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = window.util.form.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = window.util.form.querySelector('.setup-fireball-wrap');
  var inputWizardCoat = window.util.form.querySelector('.coat-color');
  var inputWizardEyes = window.util.form.querySelector('.eyes-color');
  var inputFireball = window.util.form.querySelector('.fireball-color');
  var fireballs = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  setupWizardCoat.addEventListener('click', function () {
    var randomCoatColor = window.util.coatColors[Math.floor(Math.random() *
      window.util.coatColors.length)];
    setupWizardCoat.style.fill = randomCoatColor;
    inputWizardCoat.value = randomCoatColor;
  });

  setupWizardEyes.addEventListener('click', function () {
    var randomEyesColor = window.util.eyesColors[Math.floor(Math.random() *
      window.util.eyesColors.length)];
    setupWizardEyes.style.fill = randomEyesColor;
    inputWizardEyes.value = randomEyesColor;
  });

  setupFireball.addEventListener('click', function () {
    var randomFireball = fireballs[Math.floor(Math.random() *
      fireballs.length)];
    setupFireball.style.background = randomFireball;
    inputFireball.value = randomFireball;
  });

})();
