import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_CONNECT_URI);
module.exports = mongoose