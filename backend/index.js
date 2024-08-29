const express= require('express')
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require("./db");
const app = express()
var cors = require('cors')

app.use(cors({
  origin: 'https://chennai-assignment-frontend.onrender.com', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json())
connectToDB()
app.use('/api/jobs', require('./routes/jobs'))
app.listen(5000, ()=>{
    console.log('server listening on port 5000')
})
