// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
const swal = require('sweetalert2')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));
app.use(express.static('node_modules'))
app.use(express.static('css'))

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
    console.log("w!shl!st listening on PORT " + PORT);
});
// });

// Mail Stuff
app.use(bodyParser.urlencoded({ extended: true}));
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "errands24server@gmail.com",
        pass: "lala1919"
    }
});
/*------------------SMTP Over-----------------------------*/
/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
    res.sendfile('wishlist.html');
});

app.post('/send',function(req,res){
    console.log('request::', req.body);
    var mailOptions={
        to : req.body.to,
        subject : req.body.subject,
        text : req.body.text
    }
    // console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + JSON.stringify(response, null, 2));
        res.end("sent");
         }
});
    console.log("Email Sent")
});

/*--------------------Routing Over----------------------------*/