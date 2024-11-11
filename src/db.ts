import mongoose from 'mongoose';

const url = process.env.MONGODB_URI;

mongoose.connect(url as string)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

export default mongoose;