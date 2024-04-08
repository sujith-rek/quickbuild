import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    from: process.env.NEXT_PUBLIC_EMAIL,
    auth:{
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    },
    secure: true
});

export default transporter;
