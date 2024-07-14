const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    port:587,
    host:"smt.gmail.com",
    auth:{
        user:"haxhigh.il@gmail.com",
        pass:""
    },
    secure:true
})

server.listen(process.env.PORT || 3030);