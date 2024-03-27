import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
dotenv.config();


/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {

    const { email, message } = await request.json();

    const mailOptions = {
        from: email,
        to: "stalmaks@op.pl", // the user email
        subject: 'Formularz',
        html: `<h4>Formularz kontaktowy Dźwig Barlinek</h4>
                       ${message}`
    };

    const transporter = nodemailer.createTransport({
        host: process.env['MG_HOST'],
        port: 587,
        auth: {
            user: process.env['MG_USER'],
            pass: process.env['MG_PASS']
        }
    })

    async function sendEmail() {
        try {
            const info = await transporter.sendMail(mailOptions);
            return info.messageId;
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let response = await sendEmail();

    return json({ response })

}