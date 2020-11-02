const fs = require('fs');

// fs.watchFile('user-data.txt','username=Sumaila', err=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Wrote to file');
//     }
// });

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});