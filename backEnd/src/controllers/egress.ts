import { Request, Response } from 'express';
import DotEnv from 'dotenv';
import JWT from 'jsonwebtoken';
import EgressModel from '../models/egress';
import ContractorModel from '../models/contractor';

import IEgress from '../@Types/IEgress';

DotEnv.config();

class EgressController {
    public static async create(req: Request, res: Response){

        const egress = req.body as IEgress;

        const result = await ContractorModel.findOne({ email: egress.email });

        if (result) {
            return res.status(200).json({message: 'Egress already registered!'});
        }

        EgressModel.create(egress).then(egress => {
            const token = JWT.sign(egress._id, process.env.TOKEN_KEY as string);
            return res.status(200).json({token: token});
        }).catch(err => {
            return res.status(200).json({message: 'Egress already registered!'});
        });

    }

    public static async read(req: Request, res: Response){
        const query = req.query as {page: string};
        

        try {

            let result: IEgress[] = [];

            if (query.page){
                result = await EgressModel.find().limit(Number(8)).skip((Number(query.page) - 1) * 8);
            }else {
                result = await EgressModel.find();
            }
            
            return res.status(200).json(result.map(egress => {
                return {
                    id: egress.id,
                    name: egress.name,
                    email: egress.email,
                    technologies: egress.technologies,
                    description: egress.description,
                }
            }) as IEgress[]);

        }catch (err ){
            return res.status(400).json({});
        }

        

    }

    public static async delete(req: Request, res: Response){
        return res.status(200).json({message: 'delete!'});

    }

    public static async update(req: Request, res: Response){
        const egress = req.body as IEgress;

        EgressModel.updateOne({email: egress.email}, egress).then((value) => {
            return res.status(200).json({message: 'User updated'});
        }).catch(err => {
            return res.status(400).json({message: 'Error in update'});
        });

    }

}

export default EgressController;