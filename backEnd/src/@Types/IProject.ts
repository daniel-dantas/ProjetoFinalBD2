import { Document } from 'mongoose';
import IEgress from './IEgress';
import IContractor from './IContractor';

interface IProject extends Document {
    technologies: string[],
    projectName: string,
    devs?: IEgress[],
    contractor: IContractor,
    description: string,
}

export default IProject;