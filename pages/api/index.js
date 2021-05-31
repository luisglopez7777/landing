const mailgun = require("mailgun-js");
require('dotenv').config()
const DOMAIN = process.env.DOMAIN;
const API_KEY = process.env.API_KEY


export default async function handler(req, res) {
    console.log('llega a la ruta')
    let data = req.body
    const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });
    mg.messages().send(data, function (error, body) {
        if (error) {
            res.json({ message: 'ERROR' })
        } else {
            res.json({ message: 'SUCCESS' })
        }
    })

}