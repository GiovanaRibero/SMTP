const nodemailer = require("nodemailer")
require("dotenv").config();

const transporter = nodemailer.createTransport({

    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.user,
        pass: process.env.APP_PASSWORD,
    },
});

//config para onde estamos enviando, o que estamos enviando e da onde estamos configurando.
const mailOptions = {
    from: {
        name: 'Teste Giovana',
        address: process.env.EMAIL
    }, //sender
    to: ["giovalove1998@gmail.com"],
    subject: "Send email from Gmail SMTP", //assunto do email.
    text: "Send email from Gmail SMTP", //corpo do email com texto.
    html: "<b>Hello World</b>", //corpo do email em HTML.
};

//função para envio do email
const sendMail = async (transporter, mailOptions) => {
    try{
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent');
    }catch(error){
        console.log(error);
    }
}