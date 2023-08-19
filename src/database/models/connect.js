const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nutrisalud');
        console.log('Db');
    } catch (error) {
        console.log(e);
    }
};