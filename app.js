var express = require('express');
var path = require('path');
require('dotenv').config();

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var home = require('./routes/home')

app.use('/home', home)

module.exports = app;