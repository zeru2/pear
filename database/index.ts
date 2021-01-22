import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_CONNECT_URI, { useNewUrlParser: true } );
module.exports = mongoose