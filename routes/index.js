var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");
var upload    = require('./upload');
var mongoose  = require('mongoose');
<<<<<<< HEAD
var Photo     = mongoose.model('Photos');
=======
var Documents = mongoose.model('Documents');

>>>>>>> 16adc6769fc6640e6f69fc813527e5d777e66592
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

<<<<<<< HEAD
router.get('/upload/', function(req, res, next) {

  Photo.find({}, ['path','caption'], {sort:{ _id: -1} }, function(err, photos) {
    res.render('upload', { title: 'NodeJS file upload tutorial', msg:req.query.msg, photolist : photos });
    
  });

});

/** Upload file to path and add record to database */

router.post('/upload/', function(req, res) {

  upload(req, res,(error) => {
      if(error){
         res.redirect('/upload/?msg=3');
      }else{
        if(req.file == undefined){
          
          res.redirect('/upload/?msg=2');

        }else{
             
            /**
             * Create new record in mongoDB
             */
            var fullPath = "files/"+req.file.filename;

            var document = {
              path:     fullPath, 
              caption:   req.body.caption
            };
  
          var photo = new Photo(document); 
          photo.save(function(error){
            if(error){ 
              throw error;
            } 
            res.redirect('/upload/?msg=1');
         });
      }
    }
  });    
});
=======
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
  
>>>>>>> 16adc6769fc6640e6f69fc813527e5d777e66592

module.exports = router;
