////////////////////////////////////////////////////////////////////////
//Найти минимальный элемент массива
function arrayMinimum() {
    let arr = [3, 2, 1,  5, 6, 0];
    let arrMinimum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arrMinimum) {
            arrMinimum = arr[i];
            }
    }
    return console.log(`минимальный элемент масива ${arrMinimum}`);
  }
arrayMinimum();

//////////////////////////////////////////////////////////////////////////////////

function arrayMaximum() {
    let arr = [3, 2, 1,  5, 6, 0];
    let arrMaximum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arrMaximum) {
            arrMaximum = arr[i];
            }
    }
    return console.log(`максимальный элемент масива ${arrMaximum}`);
}

  arrayMaximum();
////////////////////////////////////////////////////////////////////////////////
//Найти индекс минимального элемента массива

function arrayMinimum2() {
    let arr = [3, 2, 1,  5, 0, 6, 10];
    let arrMinimum2 = arr[0];
    let indexOfMinimum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arrMinimum2) {
            arrMinimum2 = arr[i];
            indexOfMinimum = i;
            }
    }
    return console.log(`индекс минимального элемента массива ${indexOfMinimum}`);
  }
  arrayMinimum2();
///////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//Найти индекс максимального элемента массива

function arrayMaximum() {
    let arr = [3, 2, 1,  5, 0, 16, 10];
    let arrMaximum = arr[0];
    let indexOfMaximum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arrMaximum) {
            arrMaximum = arr[i];
            indexOfMaximum = i;
            }
    }
    return console.log(`индекс максимального элемента массива ${indexOfMaximum}`);
  }
arrayMaximum();
///////////////////////////////////////////////////////////////////////////////////////////


// Посчитать сумму элементов массива с нечетными индексами

function SumOfNotEvenNumber() {
  let arr = [3, 2, 1,  5, 0, 16, 10];
  let sum =  0;
  for (let i = 1; i < arr.length; i = i +2) {
    sum = sum + arr[i];
  }
  return console.log(`Сумма элементов массива с нечетными индексами равна ${sum}`);
}

SumOfNotEvenNumber();

//////////////////////////////////////////////////////////////////////////////////////
//Сделать реверс массива (массив в обратном направлении)


function arrayReverse(arr) {
    let temp  = 0;

    for (let i = 0, j = arr.length - 1; i < arr.length; i++ , j--) {
       temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
      if (j-i <=1){
        return arr;
      }
    }
}
const revArr = arrayReverse([3, 2, 1,  5, 0, 16, 10]);
console.log(revArr);

////////////////////////////////////////////////////////////////////////////////////////
//Посчитать количество нечетных элементов массива

function numberOfNotEvenIndex() {
  let arr = [3, 2, 1,  5, 0, 16, 10];
  let numberofNotEven = 0;
  for (let i = 1; i < arr.length; i = i + 2) {
    numberofNotEven++;
  }
  return console.log(`количество нечетных элементов массива равно ${numberofNotEven}`);
}
numberOfNotEvenIndex();

/////////////////////////////////////////////////////////////////////////////////////////////
// Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

function SwapArrayIndex(arr){
  let temp = 0;
  let j = (arr.length)/2

  if (arr.length % 2 === 0){
    for (let i = 0; i < j; i++) {
      temp = arr[i];
      arr[i] = arr[i + j];
      arr[i + j] = temp;
    }
  } else {
      return console.log('нечетное количество индекса, введите четное')
    }
  return arr;

}
const revArr2 = SwapArrayIndex([1, 2, 3,  4, 5, 6, 7, 8]);
console.log(revArr2);




--