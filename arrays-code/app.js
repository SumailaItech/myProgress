// const numbers = [1, 2, 3];

// console.log(numbers);

// // const moreNumbers = new Array(5);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1 ,2);
// // console.log(yetMoreNumbers);

// const moreNumbers =Array.from('Hi');
// console.log(moreNumbers);
// const listItem = document.querySelectorAll('li');

// console.log(listItem);

// const arrayListitems = Array.from(listItem);
// console.log(arrayListitems);

// const hobbies =['cooking','sports'];
// const personalData = [30,'max',{moreData:'info'}];

// const analyticsData = [[1, 1.6],[2, 4],[5, 7]];
// for(const analData of analyticsData){
//     for(const data of analData){
//         console.log(data);
//     }
// }

// const hobbies =['sports','reading'];

// hobbies.push('cooking');
// hobbies.unshift('coding');
// const popV = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1]= 'CODING';
// console.log(hobbies);

// hobbies.splice(1,0, 'Good Food');
// console.log(hobbies);
// hobbies.splice(0,1);
// console.log(hobbies);

// const testResult =[1, 5.3, 1.5, 10, 99,1.5, -5, 10];
// //const storeResult =testResult.slice(0,3);

// const storeResult = testResult.concat([20, 40]);
// testResult.push(5.9);

// //console.log(storeResult, testResult);
// //console.log(testResult.slice());
// console.log(testResult.includes(10.9));
// console.log(testResult.indexOf(1.5));
// console.log(testResult.lastIndexOf(1.5));

// const personalData = [{name:'Max'}, {name:'Sumaila'}];

// console.log(personalData.indexOf({name:'Sumaila'}));

// const sumaila = personalData.find((person, idx, persons)=>{
//     return person.name ==='Sumaila';
// });

// sumaila.name ='Anna';

// console.log(sumaila, personalData);

// const maxIndex = personalData.findIndex((person, idx, persons)=>{
//     return person.name ==='Max';
// });

// console.log(maxIndex);

const prices =[10.99, 5.23, 3.5,4.5,7.99];
const tax = 0.19;
//const taxAdjustedPrices = [];

// for(const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, idx, prices) => {
//     const priceOb = {index:idx, taxAdj: price * (1 + tax)}
//     taxAdjustedPrices.push(priceOb);
// });

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceOb = {index:idx, taxAdj: price * (1 + tax)};
    return priceOb;
});

const sortedPrices = prices.sort((a ,b) =>{
    if(a > b){
        return 1;
    }else if(a ===b){
        return 0;
    }else{
        return -1;
    }
});
//console.log(prices, taxAdjustedPrices);
console.log(sortedPrices.reverse());

const filtedArray = prices.filter(p=> p > 6 );

console.log(filtedArray);

// let sum = 0;
// prices.forEach(price=>{
//     sum +=price;
// });

// console.log(sum);

// const sum = prices.reduce((preValue, curValue)=>preValue + curValue, 0);

// console.log(sum)

// const data = "new york;10.90;200";
// const transformedData = data.split(';')

// console.log(transformedData);
// const nameFragments = ['Iddrisu', 'Sumaila','Max','Askanda'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// console.log(copiedNameFragments);

// console.log(Math.min(...prices));

// const persons =[{name:'Sumaila',age:30},{name:'Askanda',age:45},{name:'Shamsia',age:25}];
// const copiedPersons =persons.map(person =>({
//     name:person.name,
//     age:person.age
// }));

// persons.push({name:'Anna',age:29});
// persons[0].age = 31;
// console.log(persons, copiedPersons);

const nameData = ['Iddrisu','Sumaila','Mr',30];
// const firtName = nameData[0];
// const lastName = nameData[1];

const[ firtName, lastName, ...otherInfo] = nameData;
console.log(firtName, lastName, otherInfo);