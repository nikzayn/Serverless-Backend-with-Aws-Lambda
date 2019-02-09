const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
    if(isConnected){
        console.log('Using existing database connection');
        return Promise.resolve();
    }
    console.log('Using new Database Connection');
    return mongoose.connect(process.env.DB).then(db => {
        isConnected = db.connections[0].readyState;
    });
};