/*
 if((!a && a !== 0)  (!b && b !== 0)) {
    return "не указаны все аргументы";
}
if(typeof a!=="number"  typeof b!=="number") {
    return "один из аргументов не являеться числом";
}
*/


//////////////////////////////////////////////////////////////////////////////////////

function evenOrNot(a,b) {
    console.log('Задание 1: Если а – четное посчитать а*б, иначе а+б');
    let result = 0;
    if (a % 2 === 0) {
        result = a * b;
    } else {
     result = a + b;
    }
    return result;
    }
  console.log(evenOrNot(6,4));



  //////////////////////////////////////////////////////////////////////////////////////


  function coordinates(x,y) {
  console.log('задание 2: Определить какой четверти принадлежит точка с координатами (х,у)');
  let result = 0;
  if (x > 0 && y > 0){
    return result=1;
  }
  if (x < 0 && y > 0){
     return result=2;
     }
  if (x < 0 && y < 0){
     return result=3
     }
  if (x > 0 && y < 0){
     return result=4
     }
  if (x == 0 && y == 0){
      return result='начало координат';
      }
  }

  console.log(coordinates(0,0));

  //////////////////////////////////////////////////////////////////////////////////////


  function summary(a,b,c){

  console.log('Задание 3: Найти суммы только положительных из трех чисел');
  let summary = 0;
  if (a > 0){
     summary = summary + a;
  }
  if (b > 0){
    summary = summary + b;
  }
  if (c > 0){
    summary = summary + c;
  }
  return summary;

  }

  console.log(summary(1,-1,1));


  //////////////////////////////////////////////////////////////////////////////////////


  function expression(a,b,c){
  console.log('Задание 4: Посчитать выражение макс(а*б*с, а+б+с)+3');


  let summary = a+b+c;
  let multiplication = a*b*c;
  let result;

  if (summary > multiplication){
    result = summary + 3;
  } else if (summary < multiplication){
    result = multiplication +3;
  } else {console.log('они равны')
  }
  return result;
  }

  console.log(expression(1,-1,1));


  /////////////////////////////////////////////////////////////////////////////////////////////

  function studentScore(rating) {
      console.log('Задание 5: Написать программу определения оценки студента по его рейтингу, на основе  следующих правил');

      let score;
      if (rating >= 0 && rating <= 100){
      if (rating >= 0 && rating <= 19) {
          score = 'F';
      }
      if (rating >= 20 && rating <= 39) {
          score = 'E';
      }
      if (rating >= 40 && rating <= 59) {
          score = 'D';
      }
      if (rating >= 60 && rating <= 74) {
          score = 'C';
      }
      if (rating >= 75 && rating <= 89) {
          score = 'B';
      }
      if (rating >= 90 && rating <= 100) {
          score = 'A';
      }

      } else {
      console.log('такого рейтинга нет');
      }
      return score;
  }
  console.log(studentScore(70));