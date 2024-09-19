const express = require('express')
require('dotenv').config()



PORT = process.env.PORT || 7000
const app = express()


app.listen(PORT, console.log(`Server Running on ${PORT} in ${process.env.NODE_ENV} mode`))