// Part One - Using a 'switch' statement 

const dayOfWeek = 'Monday';

switch (dayOfWeek) {
  case 'Monday':
    console.log('Study Javascript');
    break;
  case 'Tuesday':
    console.log('Repeat HTML knowledge');
    break;
  case 'Wednesday':
    console.log('Learn Algorithms');
    break;
    case 'Thursday':
    console.log('Repeat CSS knowledge');
    break;
  case 'Friday':
    console.log('Learn Algorithms - next chapter');
    break;
  case 'Saturday':
    console.log('Learn Data structures');
    break;
  case 'Sunday':
    console.log('Listen to music');
    break;
  default:
    console.log('Repeat everything');
}

// Part two - Iterating with a 'for' loop

const numbers = [2,3,4,5,6,7];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
  sum = sum + number;  
}

console.log('Total sum: ' + sum);

// Part three - Additional 'for' loop Practice

const fruits = ['Apple', 'Cherry', 'Orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log('name: ' + fruits[i], ', length: ' + fruits[i].length);
}

// Part four - Using If-Else statements

const student = {
    name: 'Mark',
    grade: 92
}

if (student['grade'] >= 60) {
    console.log('Pass');
} else {
    console.log('Fail');
}