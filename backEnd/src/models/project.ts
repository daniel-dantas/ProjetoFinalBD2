import PG from '../databases/postgres';
import { DataTypes } from 'sequelize';
// import { model, Schema } from 'mongoose';
// import IProject from '../@Types/IProject';

export default PG.define('project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    technologies: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    contractor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    devs: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
});

// export default model<IProject>('Project', new Schema({
//     technologies: {
//         type: [String],
//         required: true,
//     },
//     projectName: {
//         type: String,
//         required: true,
//     },
//     devs: {
//         type: [Schema.Types.ObjectId], 
//         ref: 'Egress',
//     },
//     contractor: {
//         type: Schema.Types.ObjectId,
//         ref: 'Contractor',
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     }
// }));
