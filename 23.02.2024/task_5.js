

// Task One - Find all occurrences of 'Spain'.

const text1 = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain...";
const regEx1 = /Spain/g;
const result1 = text1.match(regEx1);

console.log(result1);


// Task two - Find positions of 'rain' .

const text2 = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain...";
const regEx2 = /Spain/g;
const result2 = [...text2.matchAll(regEx2)];

console.log(result2);


// Task three - Replace 'Spain' with 'France'.

const text3 = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain...";
const regEx3 = /Spain/i;
const result3 = text3.replace(regEx3, 'France');

console.log(result3);


// Task four - Replace all 'rain' with 'sun'.

const text4 = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain...";
const regEx4 = /rain/g;
const result4 = text4.replaceAll(regEx4, 'sun');

console.log(result4);


// Task five - Search for 'plain'.

const text5 = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is plain...";
const regEx5 = /plain/;
const result5 = text5.search(regEx5);

console.log(result5);


