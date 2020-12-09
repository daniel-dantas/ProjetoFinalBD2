import { Request, Response } from 'express';
import DotEnv from 'dotenv';
import JWT from 'jsonwebtoken';
import ContractorModel from '../models/contractor';
import EgressModel from '../models/egress';

import IContractor from '../@Types/IContractor';

DotEnv.config();

class ContractorController {
    public static async create(req: Request, res: Response){

        const contractor = req.body as IContractor;

        const result = await EgressModel.findOne({email: contractor.email});

        if (result) {
            return res.status(400).json({message: 'Contractor already registered!'});
        }

        ContractorModel.create(contractor).then(contractor => {
            const token = JWT.sign(contractor._id, process.env.TOKEN_KEY as string);
            return res.status(200).json({token});
        }).catch(err => {
            console.log(err);
            return res.status(400).json({message: 'Contractor already registered!'});
        });
    }

    public static async read(req: Request, res: Response){
        return res.status(200).json({message: 'read!'});
    }

    public static async delete(req: Request, res: Response){
        return res.status(200).json({message: 'delete!'});

    }

    public static async update(req: Request, res: Response){
        return res.status(200).json({message: 'update!'});
    }

}

export default ContractorController;