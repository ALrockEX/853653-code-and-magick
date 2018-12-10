'use strict';
(function () {

  var loadCase = function (response) {
    window.render(response);
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

  window.requestDisplay = {
    onLoad: loadCase,
    onSave: saveCase,
    onError: errorCase
  };

})();
