const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) =>{
  const promise =new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(success =>{
      resolve(success);
    }, error =>{
      reject(error);
    }, opts);
    
});
return promise;
};


const setTimer =(duration)=>{
  const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('Done!');
  }, duration);
});
return promise;
}

function trackUserHandler() {
  //console.log('Clicked!');
// navigator.geolocation.getCurrentPosition(
//     posData=>{
//       // setTimeout(()=>{
//       //   console.log(posData.coords);
//       // },2000);
//       setTimer(2000).then(data =>{
//         console.log(data);
//       });
//   },
//   error =>{
//     console.log(error);
//   }
//   );
  // setTimeout(()=>{
  //   console.log('Timer done')
  // }, 0);
  let positionData;
  getPosition().then(posData =>{
    positionData = posData;
    return setTimer(2000);
  })
  .then(data =>{
    console.log(data, positionData);
  })
  .catch(err =>{
    console.log(err);
  });


  // setTimer(1000).then(data=>{
  //  console.log(data);
  // });


  // console.log('Getting logging');
}

button.addEventListener('click', trackUserHandler);

let result = 0;
for(let i =0; i<1000000; i++){
  result += i;
}

console.log(result);