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
function createTaxCalculaton(tax){
    function calculateTax(amount){
        return amount * tax;
    }
    return calculateTax;
}


// const vatAmount = calculateTax(100,0.19)
// const incomeTax = calculateTax(100,025);

const vatAmount = createTaxCalculaton(0.19)
 console.log(vatAmount(100));

 function greatUser(){
 let name = 'Anna';
 console.log('Hi ' + name)
}

greatUser();