// Part One - Complex 'switch' statement 

const color = 'Red';

switch (color) {
  case 'Red':
    console.log('Stop');
    break;
  case 'Green':
    console.log('Go');
    break;
  case 'Yellow':
    console.log('Caution');
    break;
  default:
    console.log('Sorry, this color does not exist on our traffic light.');
}

// Part two - Nested 'for' loop

const matrix = [[1,2],[3,4]];

for (let i = 0; i < matrix.length; i++) {
  const innerArray = matrix[i];
  for (let i = 0; i < innerArray.length; i++) {
    const number = innerArray[i];
    console.log(number);
  }
}

// Part three - Iterating over an Object

const product = {
  name: 'book', 
  price: 23, 
  inStock: true
};

for (const property in product) {
  console.log(property + ' : ' + product[property]);
}

// Part four - If-Else with Logical Operators

if(product['price'] < 50 && product['inStock']) {
    console.log('Available');
} else {
    console.log('Unavailable');
}