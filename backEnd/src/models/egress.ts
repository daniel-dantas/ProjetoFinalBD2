import { model, Schema, Types } from 'mongoose';
import IEgress from '../@Types/IEgress';

export default model<IEgress>('Egress', new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        rquired: true,
    },
    email: {
        type: String,
        unique: true,
        index: true,
    },
    registration: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        rquired: true,
    },
    technologies: {
        type: [String],
    },
    github: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    occupationArea: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
}));

