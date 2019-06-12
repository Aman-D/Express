const express = require('express');
const path = require('path');
const bp = require('body-parser');
const app = express();
const port =  5000;


//Body Parser
app.use(bp());

//get request
app.use(express.static(path.join(__dirname,'public')));

//Users Api route
app.use('/api/users',require('./apis/users.js'));


app.listen(port,()=>console.log("server is running port 500"));
