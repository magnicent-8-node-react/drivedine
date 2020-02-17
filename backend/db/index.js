const mongoose = require('mongoose')

const db_url = 'mongodb://127.0.0.1:27017/users';

mongoose
    .connect(db_url, {useNewUrlParser: true, useCreateIndex: true })
    .catch(e => {
        console.log('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db