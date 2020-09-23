const express = require('express');
const app=express();
const path =require('path');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const bodyParser = require('body-parser');

const PORT=process.env.PORT || 3000
const MONGO_URI = 'mongodb+srv://pump-db:pump123@pump-db.bn4vh.mongodb.net/pump-db'

mongoose.connect(MONGO_URI)
        .then(()=>{
            app.listen(PORT,()=>{
                console.log(`Listeing to  ${PORT}`);
                console.log(path.join(__dirname,'/public'));
                
            })
        })



app.use(express.static(path.join(__dirname,'public')));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    express.urlencoded({
      extended: true
    })
  );
app.use(express.json())
app.use('/pump/auth',authRoutes)
app.use('/pump/book',bookingRoutes);