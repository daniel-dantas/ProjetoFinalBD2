import { model, Schema } from 'mongoose';
import IContractor from '../@Types/IContractor';

export default model<IContractor>('Contractor', new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    companyName: {
        type: String,
        required: true,
    },
    CNPJ: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}));
