const mongoose = require('mongoose');
const env = require('./environment');

// if you find error conecting to database use this
mongoose.connect(`mongodb://127.0.0.1:27017/${env.db}`,{
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