const number = '23';

if(typeof number == 'number'){
    console.log('number is a number');
}
else{
    console.log('number is not a number');
}

const numbers = [23, 11, 5, 9, 71];
const students = {name: 'babu rangila', job: 'churi kora ar kelani khaoa'};

console.log(typeof numbers); // this is array but in js acts like object
console.log(typeof students);

// to check if any variable is array or not 
console.log(Array.isArray(numbers)); //isArray
console.log(Array.isArray(students)); // not an array

console.log('----------------------')

// isNaN ()
console.log(isNaN(123));
console.log(isNaN(-1.23));

console.log(isNaN(5-2));
console.log(isNaN(0));

console.log(isNaN('123')); //string er vitor er number acceptable 
console.log(isNaN('Hello'));
console.log(isNaN([])); //count as number 

console.log(isNaN('2005/12/12'));