const express = require('express')
const app = express()
const env = require('dotenv');
const { adminRoute } = require('./routes/admin/adminRoute');
env.config();


//Admin Routes
app.use('/superadmin',adminRoute)

//Customer Routes

//Seller Route

let port = process.env.PORT;
app.listen(port,()=>{
    console.log('The server is running on port',port)
});