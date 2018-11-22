'use strict';

var cloud = {
  leftHeight: 290,
  length: 420,
  rightHeight: 270,
  coordinateX: 100,
  coordinateY: 10,
  controlPoint: {
    first: {
      leftX: 50,
      leftY: 220,
      topX: 100,
      topY: -35,
      rightX: 350,
      rightY: 70,
      bottomX: 350,
      bottomY: 310
    },
    second: {
      leftX: -100,
      leftY: 70,
      topX: 300,
      topY: 40,
      rightX: 490,
      rightY: 200,
      bottomX: 100,
      bottomY: 190
    }
  }
};

var makeField = function (ctx, beginX, beginY) {
  ctx.beginPath();
  ctx.moveTo(beginX, beginY + cloud.leftHeight);
  ctx.bezierCurveTo(
      beginX + cloud.controlPoint.first.leftX,
      beginY + cloud.controlPoint.first.leftY,
      beginX + cloud.controlPoint.second.leftX,
      beginY + cloud.controlPoint.second.leftY,
      beginX,
      beginY
  );
  ctx.bezierCurveTo(
      beginX + cloud.controlPoint.first.topX,
      beginY + cloud.controlPoint.first.topY,
      beginX + cloud.controlPoint.second.topX,
      beginY + cloud.controlPoint.second.topY,
      beginX + cloud.length,
      beginY
  );
  ctx.bezierCurveTo(
      beginX + cloud.controlPoint.first.rightX,
      beginY + cloud.controlPoint.first.rightY,
      beginX + cloud.controlPoint.second.rightX,
      beginY + cloud.controlPoint.second.rightY,
      beginX + cloud.length,
      beginY + cloud.rightHeight
  );
  ctx.bezierCurveTo(
      beginX + cloud.controlPoint.first.bottomX,
      beginY + cloud.controlPoint.first.bottomY,
      beginX + cloud.controlPoint.second.bottomX,
      beginY + cloud.controlPoint.second.bottomY,
      beginX,
      beginY + cloud.leftHeight
  );
  ctx.closePath();
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  // Рисуем тень облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  makeField(ctx, cloud.coordinateX + 10, cloud.coordinateY + 10);

  // Рисуем облако
  ctx.fillStyle = 'white';
  makeField(ctx, cloud.coordinateX, cloud.coordinateY);

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
