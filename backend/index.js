const express= require('express')
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require("./db");
const app = express()
var cors = require('cors')

app.use(cors())
app.use(express.json())
connectToDB()
app.use('/api/jobs', require('./routes/jobs'))
app.listen(5000, ()=>{
    console.log('server listening on port 5000')
})