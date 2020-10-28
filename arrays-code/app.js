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

const hobbies =['sports','reading'];

hobbies.push('cooking');
hobbies.unshift('coding');
const popV = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1]= 'CODING';
console.log(hobbies);