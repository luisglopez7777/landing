// const express = require('express')
// const next = require('next')
// require('dotenv').config()
// const PORT = process.env.PORT || 4000
// const dev = process.env.NODE_ENV !== 'production'
// // const app = next({ dev })
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare()
//     .then(() => {
//         const server = express()
//         server.use(express.json())
//         console.log('llega al server')
//         const showRoutes = require('./routes/index.js')

//         server.use('/api', showRoutes)

//         server.get("*", (req, res) => {
//             return handle(req, res)
//         })

//         server.listen(PORT, err => {
//             if (err) throw err
//             console.log(`Read on ${PORT}`)
//         })
//     })

//     .catch(ex => {
//         console.error(ex.stack)
//         process.exit(1)
//     })
