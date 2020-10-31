function add(num1, num2){
    return num1 + num2;
}

console.log(add(1,5));
console.log(add(23,4));

function addRandom(num1){
    return num1 + Math.random();
}

console.log(addRandom(2));

let previousResult =0;
function addMoreNumbers(num1,num2){
    const sum =num1 + num2;
    previousResult = sum;
    return sum;
}

const hobbies =['sports','coding'];
function printHobbies(h){
    h.push('New Hobby');
    console.log(h);
}

printHobbies(hobbies);