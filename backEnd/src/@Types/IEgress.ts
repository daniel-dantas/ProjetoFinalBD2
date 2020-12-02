import { Document } from 'mongoose';

interface IEgress extends Document {
    name: string,
    surname: string,
    email: string,
    registration: string,
    password: string,
    technologies: string[],
    github?: string,
    linkedin?: string,
    occupationArea: string,
    description: string
}

export default IEgress;