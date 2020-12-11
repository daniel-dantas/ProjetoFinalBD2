import { Request, Response } from 'express';

import DotEnv from 'dotenv';
import ContractorModel from '../models/contractor';
import EgressModel from '../models/egress';
import JWT from 'jsonwebtoken';

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
}

export default UserController;