import { connect } from 'mongoose';

let isconnected=false;

const connectDB = async () => {
    try {
        // eslint-disable-next-line no-undef
        await connect(`${process.env.MONGO_URI}`);
        isconnected=true;
        if(isconnected){
            console.log("MongoDB already Connected");
        }
        else{

            console.log('MongoDB Connected');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

export default connectDB;
