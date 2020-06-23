const express = require('express')
const appLogger = require('./applogger')
const app = express()
const port = 3000

app.get('/req1',(req, res) => {appLogger.info("requested on req1"),res.send('Hello World!')})
app.get('/req2',(req,res) => {appLogger.info("requested on req1"),res.send('Hello World!')})
app.get('/req3',(req,res) => {appLogger.info("requested on req1"),res.send('Hello World!')})
app.get('/req4',(req,res) => {appLogger.info("requested on req1"),res.send('Hello World!')})
app.get('/req5',(req,res) => {appLogger.info("requested on req1"),res.send('Hello World!')})

app.listen(port, () => console.log(`Example app listening at port ${port}`))