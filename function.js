// Получить строковое название дня недели по номеру дня.
function weekDays(day) {

switch (day) {
  case 1:
    day = 'понедельник';
    break;
  case 2:
    day = 'вторник';
    break;
  case 3:
    day = 'среда';
    break;
  case 4:
    day = 'четверг';
    break;
   case 5:
    day = 'пятница';
    break;
   case 6:
    day = 'суббота';
   case 7:
    day = 'воскресение';
    break;
  default:
    day = 'ошибка';
}
return day;
}

console.log(weekDays(5));

/////////////////////////////////////////////////////////////////

//Найти расстояние между двумя точками в двумерном декартовом пространстве.

function DistanceBetween(cordinate) {
  distance = (cordinate[2]-cordinate[0])**2 + (cordinate[3]-cordinate[1])**2;

  for (let i = distance; i >= 1; i--) {
           if (i * i === distance) {
               distance = i;
               break;
          }
      }
return distance;
}
console.log(DistanceBetween([0, 0, 3, 4]));

