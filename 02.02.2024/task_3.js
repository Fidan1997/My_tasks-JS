// Part One - Arrow function with default parameter

greet = (name, greeting = 'Hello ') => {
  console.log(greeting + name);
}

greet('Mark');
greet('Tim', 'Nice to meet you ');

// Part two - Recursion with arrow function

factorial = (n) => {

    if(n ===0 || n === 1) {
      return 1;
    } else {
      return (n * factorial(n-1));
    }
 
}

console.log(factorial(5));

// Part three - Simplified use of rest parameters in arrow function

sumAll = (...list) => {
    let m = 0;
    for (let t = 0; t < list.length; t++) {
        m = m + list[t];
    }
    return m;
}

console.log(sumAll(3,2,4,3,2,5))


// Part four - Understanding call stack with arrow functions

first = () => {
    console.log('first function start');
    second();
    console.log('first function end');
}

second = () => {
    console.log('second function start');
    third();
    console.log('second function end');
}

third = () => {
    console.log('third function');
}

first();
