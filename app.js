const request = require('request');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const API_KEY = '16d5e24f29c6edcbe4d2ac3fa4a26898';
//https://image.tmdb.org/t/p/w500/


app.get('/', (req, res)=>{
    res.render('index');
});


app.post('/search', (req, res)=>{
    console.log(req.body);
});


// let query = 'Batman';

// const url =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;

// const requestToTMdB = request({url: url},(error, req, res)=>{
//     console.log(res);
// });

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});