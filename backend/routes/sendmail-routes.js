const express=require('express');

const router = express.Router();

var nodemailer = require('nodemailer');

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
//  3 parameter of yours here
);

// https://developers.google.com/oauthplayground

const accessToken = oauth2Client.getAccessToken()
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // Your auth parameters here
  }
});

router.post('/', function(req, res) {  

    console.log("Ghussa");
      
      my_products=req.body.all_products;
      my_quantity=req.body.quantity;
  
      
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });
        res.send("Hello");
  }); 

module.exports = router;
