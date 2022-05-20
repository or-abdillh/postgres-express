'use sctrict'

// Import modules
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Setup
const app = express()
app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )
app.use( cors() )

const PORT = process.env.PORT || 8000

// Running server
app.listen(PORT, err => {
	try {
		if (!err) console.log(`Server running at port ${PORT} - start on ${new Date().toLocaleString()}`)
		else throw err
	} catch(err) { console.log(`Something error was happen : ${err}`) }
})
