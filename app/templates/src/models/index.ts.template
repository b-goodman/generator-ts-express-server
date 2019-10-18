import mongoose from 'mongoose';
import Video from './video';

export const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL!, { useNewUrlParser: true,  useUnifiedTopology: true });
};

export const models = { Video };

