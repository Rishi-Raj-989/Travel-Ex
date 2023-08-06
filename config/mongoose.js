
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/social_media_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open',function(){
    console.log('connected to database');
}
)

module.exports = db;