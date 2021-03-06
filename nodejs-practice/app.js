const express = require('express');
const bodyParser = require('body-parser');

const locationRoutes = require('./routes/location');

const app = express();

// app.set('view engine','ejs');
// app.set('views','views');

// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(locationRoutes);

// app.use((req, res, next)=>{
//     res.setHeader('Content-Type','text/html');
//     next();
// });

// app.use((req, res, next)=>{
//     const userName = req.body.username || 'Unknown user';
//     // res.send(`<h1>Hi ${userName}</h1>`)
//     res.render('index',{
//         user:userName
//     })
// });

app.listen(3000);