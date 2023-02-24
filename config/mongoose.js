const mongoose = require('mongoose');


// if you find error conecting to database use this
mongoose.connect('mongodb://localhost/codeial_development',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
});
// or you can simply use this
// mongoose.connect('mongodb://localhost/codeial_development');


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;