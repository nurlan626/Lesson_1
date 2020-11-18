
/////////////////////////////////////////////////////////////////////////////
function sumOfEvenNumber() {
    console.log('Задание 1: Найти сумму четных чисел и их количество в диапазоне от 1 до 99');
    let SummerOfEven = 0;
    let EvenNumber = 0;
        for (let i = 1; i < 99; i++) {
            if (i % 2 == 0) {
                EvenNumber++
                SummerOfEven += i;
            }
        }
return `сумма четных чисел равна ${SummerOfEven} , количество нечетных чисел равна ${EvenNumber}`;
}

console.log(sumOfEvenNumber());



///////////////////////////////////////////////////////////////////////////

function primeNumber(number) {
    let numberOfDivider = 0;
    console.log('задание 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)');
    for (let i = 1; i <= number; i++) {
        if ( number % i === 0) {
            numberOfDivider++
        }
    }
    if (numberOfDivider > 2) {
        return `Число ${number}  непростое`;
    } else {  return `Число ${number}  простое`;
    }

}

console.log(primeNumber(255));

/////////////////////////////////////////////////////////////////////////////

function factorial(numberFactorial) {
    console.log('Задание 3: Вычислить факториал числа n. n! = 1*2*…*n-1*n;!');
    let factorial = 1;
    for (let i = 1; i <= numberFactorial; i++) {
        factorial *= i;
    }
    return `Факториал числа ${numberFactorial} равен ${factorial}` ;
}
console.log(factorial(1));

///////////////////////////////////////////////////////////////////////////////

function sumEveryNumber(number3) {
    let j  = number3;
    let i = 1;
    let summerEveryNumber = 0;
    console.log('Задание 4. Посчитать сумму цифр заданного числа');
    while (j  >= 10) {
      summerEveryNumber =summerEveryNumber + j % 10;
      j = (j - (j % 10))/ 10;
      i++
    }
    summerEveryNumber += j;
    return `число цифр  ${i}, сумма цифр ${summerEveryNumber}` ;
}

console.log(sumEveryNumber(2003051));

//////////////////////////////////////////////////////////////////////////////


function Mirror(number5) {
  console.log('Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.');
  let j  = number5;
  let i = 1;
  let mirrorNumber = 0;
  while (j  >= 10) {

      mirrorNumber = mirrorNumber * 10 + j % 10;
      j = (j - (j % 10))/ 10;
      i++
    }

  mirrorNumber = mirrorNumber * 10 + j;
  return `число цифр  ${i}, зеркальное число ${mirrorNumber}` ;
}
console.log(Mirror(1234));

////////////////////////////////////////////////////////////////////////
