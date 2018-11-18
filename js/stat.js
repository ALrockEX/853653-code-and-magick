'use strict';
var makeField = function (ctx, beginX, beginY) {
  ctx.beginPath();
  ctx.moveTo(beginX, beginY + 290);
  ctx.bezierCurveTo(beginX + 50, beginY + 220, beginX - 100, beginY + 70, beginX, beginY);
  ctx.bezierCurveTo(beginX + 100, beginY - 35, beginX + 300, beginY + 40, beginX + 420, beginY);
  ctx.bezierCurveTo(beginX + 350, beginY + 70, beginX + 490, beginY + 200, beginX + 420, beginY + 270);
  ctx.bezierCurveTo(beginX + 350, beginY + 310, beginX + 100, beginY + 190, beginX, beginY + 290);
  ctx.closePath();
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  // Рисуем тень облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  makeField(ctx, 110, 20);

  // Рисуем облако
  ctx.fillStyle = 'white';
  makeField(ctx, 100, 10);

  // Заголовок
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 160, 30);
  ctx.fillText('Список результатов:', 160, 50);

  // Поиск максимума
  var timeMax = 0;

  for (var i = 0; i < times.length; i++) {
    if (timeMax < times[i]) {
      timeMax = times[i];
    }
  }

  // Рисуем гистограмму
  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(160 + i * 90, 230 - times[i] * 150 / timeMax, 40, times[i] * 150 / timeMax);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], 160 + i * 90, 250);
    ctx.fillText(Math.round(times[i]), 160 + i * 90, 220 - times[i] * 150 / timeMax);
  }
};
