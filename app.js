const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sneha.p.kawale@gmail.com',
        pass: 'xqcb uebg kkla chmz'
    }
});

// Function to send an email
const sendEmail = async () => {
    const customerMailOptions = {
        from: 'sneha.p.kawale@gmail.com',
        to: 'snehakawale256@gmail.com',
        subject: 'Email delivery status',
        text: 'Hello, welcome to the coding hub'
    };

    try {
        transporter.sendMail(customerMailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (error) {
        console.log(error);
    }
};

sendEmail();



