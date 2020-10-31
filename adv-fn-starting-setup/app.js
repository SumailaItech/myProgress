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

// function powerOf(x, n){
//     let result = 1;
//     for(let i=0; i<n; i++){
//         result *=x;
//     }
//     return result;

// }

function powerOf(x ,n){
    // if(n===1){
    //     return x;
    // }
    return n===1 ? x: x  * powerOf(x, n-1);
}
console.log(powerOf(2, 3));

const myself ={
    name:'Sumaila',
    friends:[
        {
            name:'Max',
            friends :[
                {
                    name:'Chris',
                }
            ]
        },
        {
            name:'Julia'
        }
    ]
}
function getFriendNames(person){
    const collectionNames =[];

    if(!person.friends){
        return[];
    }
    for(const friend of person.friends){
    collectionNames.push(friend.name);
    collectionNames.push(...getFriendNames(friend));
    
    }
    return collectionNames;
}

console.log(getFriendNames(myself));