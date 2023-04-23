// 1. Создайте функцию, которая принимает целое число в качестве аргумента и возвращает «Четное» для четных чисел или «Нечетное» для нечетных чисел. JavaScript

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(11));

// 2. Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0. Например (Вход -> Выход): 2 -> 3 (1 + 2) 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

  console.log(summation(2)); // Output: 3
console.log(summation(8)); // Output: 36

// Using for...of loop
const summationNum = (num) => {
    let sum = 0;
    for (let i of Array.from({ length: num }, (_, i) => i + 1)) {
      sum += i;
    }
    return sum;
  };
  
  // Using reduce() method
  const summationNumber = (num) => {
    return Array.from({ length: num }, (_, i) => i + 1).reduce((acc, cur) => acc + cur, 0);
  };
  
  // 3. В вашем классе был тест, и вы его прошли. Поздравляем! Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе. Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат! Верните True, если вам лучше, иначе False! Примечание: Ваши баллы не включены в массив баллов вашего класса. Для расчета среднего балла вы можете добавить свой балл в данный массив!

  function betterThanAverage(classPoints, yourPoints) {
    // Сначала вычисляем сумму всех баллов в классе
    const sum = classPoints.reduce((total, point) => total + point, 0);
    // Затем вычисляем средний балл в классе
    const average = sum / classPoints.length;
    // Вычисляем, выше ли ваш балл среднего балла в классе
    return yourPoints > average;
  }
  const classPoints = [65, 75, 85, 95];
const yourPoints = 90;
const result = betterThanAverage(classPoints, yourPoints);
console.log(result); // true

//Использование метода reduce:
function betterThanAverage(classPoints, yourPoints) {
    const sum = classPoints.reduce((acc, val) => acc + val);
    const average = sum / classPoints.length;
    return yourPoints > average;
  }

  //Использование метода forEach:
  function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    classPoints.forEach((point) => sum += point);
    const average = sum / classPoints.length;
    return yourPoints > average;
  }
  //Использование цикла for:
  function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
      sum += classPoints[i];
    }
    const average = sum / classPoints.length;
    return yourPoints > average;
  }

  //Использование метода reduceRight:
  function betterThanAverage(classPoints, yourPoints) {
    const sum = classPoints.reduceRight((acc, val) => acc + val);
    const average = sum / classPoints.length;
    return yourPoints > average;
  }

  //Использование оператора for...of:
  function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (const point of classPoints) {
      sum += point;
    }
    const average = sum / classPoints.length;
    return yourPoints > average;
  }
  
  
  
  
  