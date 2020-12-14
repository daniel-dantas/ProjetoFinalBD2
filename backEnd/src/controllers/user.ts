import { Request, Response } from 'express';

import DotEnv from 'dotenv';
import ContractorModel from '../models/contractor';
import EgressModel from '../models/egress';
import JWT from 'jsonwebtoken';
import IContractor from '../@Types/IContractor';

DotEnv.config();

class UserController{
    public static async authentication(req: Request, res: Response){
        try{
            const authBody = req.body as { email: string, password: string };

            const contractor = await ContractorModel.findOne({email: authBody.email});

            if(contractor) {
                if(contractor.password === authBody.password) {
                    const token = JWT.sign(contractor.id, process.env.TOKEN_KEY as string);
                    return res.status(200).json({token});
                }
                return res.status(400).json({
                    message: 'User not found!'
                });
            }else{

                const egress = await EgressModel.findOne({email: authBody.email});
                
                if(egress){
                    if(egress.password === authBody.password){
                        const token = JWT.sign(egress.id, process.env.TOKEN_KEY as string);
                        return res.status(200).json({token});
                    }
                    return res.status(400).json({
                        message: 'User not found!'
                    });
                }else{
                    return res.status(400).json({
                        message: 'User not found!'
                    });
                }
            }

        }catch(err){
            console.log(err);
            return res.status(400).json({message: 'User not found!'});
        }

    }

    public static async UserMe (req: Request, res: Response){
        const userId = req.headers.authorization;

        const contractor = await ContractorModel.findOne({_id: userId});

        if(contractor){
            return res.status(200).json({user: {
                account: 'contractor',
                id: contractor.id,
                name: contractor.name,
                companyName: contractor.companyName,
                email: contractor.email,
                cnpj: contractor.cnpj,
            }});
        }else{
            const egress = await EgressModel.findOne({_id: {userId}});

            if(egress){
                return res.status(200).json({user: {
                    account: 'egress',
                    id: egress.id,
                    name: egress.name,
                    email: egress.email,
                    description: egress.description,
                    technologies: egress.technologies,
                }});
            }else{
                return res.status(400).json({message: 'User not found!'});
            }
        }

    }

}

export default UserController;