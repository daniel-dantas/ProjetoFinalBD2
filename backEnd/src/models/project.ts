import { model, Schema } from 'mongoose';
import IProject from '../@Types/IProject';

export default model<IProject>('Project', new Schema({
    technologies: {
        type: [String],
        required: true,
    },
    projectName: {
        type: String,
        required: true,
    },
    devs: {
        type: [Schema.Types.ObjectId], 
        ref: 'Egress',
    },
    contractor: {
        type: Schema.Types.ObjectId,
        ref: 'Contractor',
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}));
