const request = require('request');
const express = require('express');

//TODO helmet

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let title = '';
let description = '';


const API_KEY = '16d5e24f29c6edcbe4d2ac3fa4a26898';
//https://image.tmdb.org/t/p/w500/


app.get('/', (req, res)=>{
    res.render('index', {title: title});
});


app.post('/search', (req, res)=>{
    let query = req.body.movie;
    //ajax logic here
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
    
    request({url: url}, (error, req, resp)=>{
        const rawData = JSON.parse(resp);
        const moviesArray = rawData.results;
        console.log(moviesArray);
        title = moviesArray[0].title;
        res.redirect('/');
    });

   //res.redirect('/');
});


// let query = 'Batman';

// const url =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;

// const requestToTMdB = request({url: url},(error, req, res)=>{
//     console.log(res);
// });

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});