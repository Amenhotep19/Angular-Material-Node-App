var express = require('express');//require express module and get function reference
var app = express();//create an instance of an express app

var fs = require('fs');
var _ = require('lodash');
var users = [];

//read in file from api/users.json, use utf-8 character encoding, call function with the data
fs.readFile('api/users.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    } else {
        JSON.parse(data).forEach(  (user) => {
            user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
            users.push(user);
        });
    }
})

//handle HTTP GET request to '/' url by sending 'Hello World' as a response
app.get('/', (req, res) => {
    res.send('Hello World Nodemon!');
});

//handle HTTP GET request to /yo path by sending 'YO' as a response
app.get('/yo', (req, res) => {
    res.send('YOYOYO!');
});

//have the express app list off of port 3000 and once the app is listening, have it call our function and
//do a log to the console
var server = app.listen(3000, () =>{
    console.log('Express app is up and running! on port: '+ server.address().port);
});