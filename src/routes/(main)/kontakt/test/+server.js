import dotenv from 'dotenv';
dotenv.config();


/** @type {import('./$types').RequestHandler} */
export function GET() {

    return new Response(String(process.env['MG_HOST']));
}