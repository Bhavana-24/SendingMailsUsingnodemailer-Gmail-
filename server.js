
require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com',
        pass: process.env.PASSWORD || '1234' 
});


let mailOptions = {
    from: 'abc@gmail.com', 
    to: 'cba@gmail.com', 
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};


transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});