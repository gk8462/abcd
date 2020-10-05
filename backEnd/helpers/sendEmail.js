/**
 * @description sends email using nodemailer.
 */

const nodemailer = require('nodemailer'),
    emailConfig = require('../config/emailConfig'),
    transporter = nodemailer.createTransport({
        service: emailConfig.service,
        auth: {
            user: emailConfig.user,
            pass: emailConfig.password
        }
    });


const sendEmailProps = (toEmail, subject, body) =>{
    const mailOptions = {
        from: emailConfig.user,
        to: toEmail,
        subject: subject,
        html: html
    }
    transporter.sendMail(mailOptions, (err, info)=> {
        if(err) {
            return false;
        } else {
            return true;
        }
    })
}

module.exports = sendEmailProps;
