const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const { contentType } = require('express/lib/response');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','users.html')); 
 });

 router.get('/', (req, res, next) => {;
    res.sendFile(path.join(__dirname,'..','views','index.html')); 
});


module.exports = router;