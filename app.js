const request = require('request');
const express = require('express');

//TODO helmet

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let moviesData = [];

let imgURL='https://image.tmdb.org/t/p/w500';


const API_KEY = '16d5e24f29c6edcbe4d2ac3fa4a26898';
//https://image.tmdb.org/t/p/w500/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg


app.get('/', (req, res)=>{
    res.render('index', {moviesData: moviesData, imgURL:imgURL});
});


app.post('/search', (req, res)=>{
    let query = req.body.movie;
    //ajax logic here
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
    
    request({url: url}, (error, req, resp)=>{
        const rawData = JSON.parse(resp);
        moviesData = rawData.results;

        // title = moviesArray[0].title;
        // description = moviesArray[0].overview;
        //imgURL = moviesArray[0].poster_path;
        
        
        
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