//const axios = require('axios');

const fetchData = () => {
    return Promise.resolve({
        title: 'delectus aut autem'
    })
//   return axios
//     .get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//       return response.data;
//     });
};

exports.fetchData = fetchData;
