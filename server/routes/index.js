const express = require('express')
const router = express.Router()
const mailgun = require("mailgun-js");
require('dotenv').config()
const DOMAIN = process.env.DOMAIN;
const API_KEY = process.env.API_KEY


router.post("/email", (req, res) => {
    let data = req.body
    const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });
    mg.messages().send(data, function (error, body) {
        if (error) {
            res.send(error)
        } else {
            res.send('Success')
        }
    })
})


module.exports = router