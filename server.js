const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user.route');
const mongoose = require('mongoose');
const path=require("path");
var routes = require("./routes/user.route");  
const keys = require('./config/keys');   

//mongoose.connect('mongodb://localhost:27017/testauth');


const PORT = 3000;

//set view engine
app.set('view engine','ejs');
app.set("views",path.resolve(__dirname,"views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/checking', function(req, res){
   res.json({
      "Tutorial": "Welcome to the Node express JWT Tutorial"
});
});

mongoose.connect(keys.mongodb.dbURI,function(){
      console.log('connected to mongodb');
  }); 

app.use('/user', user);
app.use(routes); 
app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});
