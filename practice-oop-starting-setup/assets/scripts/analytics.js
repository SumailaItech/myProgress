const intervalId = setInterval(()=>{
    console.log('Loading analytics data......');
},2000);

document.getElementById('startAnalyticsBtn').addEventListener('click', clearInterval(intervalId));