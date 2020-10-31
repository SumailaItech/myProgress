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

 async function trackUserHandler() {
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
  //let positionData;
  let posData;
  let timerData;
  try{
     posData = await getPosition();
     timerData =await setTimer(2000);
    
  }catch(error){
    console.log(error)
  }
  console.log(timerData, posData);
//  .then(posData =>{
//     positionData = posData;
//     return setTimer(2000);
//   })
  // .then(data =>{
  //   console.log(data, positionData);
  // })
  // .catch(err =>{
  //   console.log(err);
  // });


  // setTimer(1000).then(data=>{
  //  console.log(data);
  // });


  // console.log('Getting logging');
}

button.addEventListener('click', trackUserHandler);

Promise.race([getPosition(),setTimer(1000)])
.then(data =>{
  console.log(data);
});

Promise.all([getPosition(),setTimer(1000)])
.then(promiseData =>{
  console.log(promiseData);
});

Promise.allSettled([getPosition(),setTimer(1000)])
.then(data =>{
  console.log(data);
});
// let result = 0;
// for(let i =0; i<1000000; i++){
//   result += i;
// }

// console.log(result);