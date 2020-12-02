import { Document } from 'mongoose';

interface IContractor extends Document{
    name: string,
    surname: string,
    email: string,
    companyName: string,
    cnpj: string,
    password: string,
}

export default IContractor;