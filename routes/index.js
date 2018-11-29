var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");
var upload    = require('./upload');
var mongoose  = require('mongoose');
var Documents = mongoose.model('Documents');

// restrict index for logged in user only
router.get('/', auth.home);

// route to register page
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);

//rout for upload page
//router.get('/upload',auth.upLoad);

//rout for superadmin page
router.get('/super',auth.adminSuper);

router.get('/upload', function(req, res, next) {

    Documents.find({}, ['path','caption'], {sort:{ _id: -1} }, function(err, documents) {
      res.render('upload', { msg:req.query.msg, documentsList : documents });
    });
  
  });

router.post('/upload', function(req, res) {
  
  upload(req, res,(error) => {
       if(error){
          res.redirect('/upload');
       }else{
         if(req.file == undefined){
           console.log("Esta vacio");
           res.redirect('/upload');
 
         }else{

             var fullPath = "files/"+req.file.filename;
 
             var document = {
               path:     fullPath, 
               caption:   req.body.caption
             };
    
           var doc = new Documents(document); 
           doc.save(function(error){
             if(error){ 
               throw error;
             } 
             console.log("Se a guardado");
             res.redirect('/upload');
          });
       }
     }
   });    
 });
  

module.exports = router;
