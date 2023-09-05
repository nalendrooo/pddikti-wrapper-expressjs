const express = require('express')
require('dotenv').config()

const dbConnect = async () => {
	try {
		console.log('Database connected..')
	} catch (error) {
		console.log('Database fail to connect..')
		console.log(error)
	}
}
dbConnect()

const app = express()
const PORT = process.env.PORT || 9000

app.use(express.json())
app.use('/api', require('./src/routes/index'))

app.listen(PORT, () => {
	console.log(`Server has running on port: ${PORT}`)
})
