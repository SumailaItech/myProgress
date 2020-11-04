const uid = Symbol('uid')
console.log(uid);

const user ={
  //  id: 'p1',
    [uid]:'p1',
    name:'Sumaila',
    age:30
};

console.log(user);