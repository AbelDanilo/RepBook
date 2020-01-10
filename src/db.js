const mongoose = require('mongoose');

var options = {
   
    useUnifiedTopology: true ,
    useCreateIndex: true,
    useNewUrlParser: true
    }

mongoose.connect(process.env.MONGO_URl,options)
    .then(db => console.log('DataBase Working!!'))
    .catch(err => console.error(err));