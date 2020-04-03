const express = require('express');
const router = express.Router();

module.exports = function() {
    //homepage url
    router.get('/',(req,res) =>{
        res.render('index',{
            pageTitle:'Home',
            className :'home'
        });
    });
    //about
    router.get('/about',(req,res) =>{
        res.render('about',{
            pageTitle:'About Us'
        });
    });
    //activities
    router.get('/upcomingActivities',(req,res) =>{
        res.render('upcomingActivities',{
            pageTitle:'activities'
        });
    
    });
    //wecocubs
    router.get('/wecocubs',(req,res) =>{
        res.render('wecocubs',{
            pageTitle:'wecocubs'
        });
    
    });
    //wecoyouths
    router.get('/wecoyouths',(req,res) =>{
        res.render('wecoyouths',{
            pageTitle:'wecoyouths'
        });
    
    });
    //wecoadults
    router.get('/wecoadults',(req,res) =>{
        res.render('wecoadults',{
            pageTitle:'wecoadults'
        });
    
    });
    //ndovufamily
    router.get('/ndovufamily',(req,res) =>{
        res.render('ndovufamily',{
            pageTitle:'ndovufamily'
        });
    
    });
    //kifarufamily
    router.get('/kifarufamily',(req,res) =>{
        res.render('kifarufamily',{
            pageTitle:'kifarufamily'
        });
    
    });
    //nyatifamily
    router.get('/nyatifamily',(req,res) =>{
        res.render('nyatifamily',{
            pageTitle:'nyatifamily'
        });
    
    });
    //simbafamily
    router.get('/simbafamily',(req,res) =>{
        res.render('simbafamily',{
            pageTitle:'simbafamily'
        });
    
    });
    //chuifamily
    router.get('/chuifamily',(req,res) =>{
        res.render('chuifamily',{
            pageTitle:'chuifamily'
        });
    
    });
    //bronze
    router.get('/bronze',(req,res) =>{
        res.render('bronze',{
            pageTitle:'bronze'
        });
    
    });
    //silver
    router.get('/silver',(req,res) =>{
        res.render('silver',{
            pageTitle:'silver'
        });
    
    });
    //gold
    router.get('/gold',(req,res) =>{
        res.render('gold',{
            pageTitle:'gold'
        });
    
    });
    router.get('/login',(req,res) =>{
        res.render('login',{
            pageTitle:'login'
        });
    
    });
    router.get('/signin',(req,res) =>{
        res.render('signin',{
            pageTitle:'signin'
        });
    
    });
    return router;
}
