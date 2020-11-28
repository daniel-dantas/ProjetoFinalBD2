import mongoose from 'mongoose';
import Dotenv from 'dotenv';

Dotenv.config();

const mongo = mongoose.connect(`mongodb://${process.env.MOGO_HOST}:${process.env.MONGO_PORT}/ProjetoBD2`,{useNewUrlParser:true, useUnifiedTopology: true});

export default mongo;