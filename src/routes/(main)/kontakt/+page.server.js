import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const message = data.get('message');

		console.log(process.env['MG_USER'])

		const transport = nodemailer.createTransport({
			host: process.env['MG_HOST'],
			port: 587,
			auth: {
				user: process.env['MG_USER'],
				pass: process.env['MG_PASS']
			}
		})


		const mailOptions = {
			from: email,
			to: "danielborowski05@gmail.com", // the user email
			subject: 'Formularz',
			html: `<h4>Formularz kontaktowy Dźwig Barlinek</h4>
						   ${message}`
		};

		// eslint-disable-next-line no-unused-vars
		const info = transport.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log("Message sent: %s", info.messageId);
		});

		return { success: true };
	}
};