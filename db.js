const mongoose = require('mongoose');
const url = 'mongodb+srv://root:food123123@cluster0.cdw1p.mongodb.net/gluten?retryWrites=true&w=majority';
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;