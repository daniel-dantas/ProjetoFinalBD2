import mongoose from 'mongoose';
import Dotenv from 'dotenv';

Dotenv.config();

class Mongo {
    public static async connect(){
        await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/ProjetoBD2`,{
            useNewUrlParser:true, 
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    }
}


export default Mongo;