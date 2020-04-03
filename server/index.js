const express = require('express');
const path = require('path');
const routes = require('./routes');

//import the configurations
const  configs = require('./config');

// create the new server
const app = express();

//filter the current enviroment
const  config = configs[app.get('env')];  

//enable pug
app.set('view engine','pug');

//add the views folder into the project
app.set('views',path.join(__dirname,'./views'));

//load the public assets folder
app.use(express.static('public'));

//get the current year
app.use((req,res,next) => {
    const date = new Date();
    res.locals.currentYear = date.getFullYear();

    //take the current page
    res.locals.currentPage = req.path;
    return next();
});


//pass the sitename to the views
app.locals.sitetitle = config.sitename;


//listen for the home page
app.use('/',routes()); 

//run the application
app.listen(3000);