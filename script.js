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
  