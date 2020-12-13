import { NextFunction, Request, Response } from 'express';

import ContractorModel from '../models/contractor';
import EgressModel from '../models/egress';

import DotEnv from 'dotenv';
import JWT from 'jsonwebtoken';

DotEnv.config();

export default (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization;

    if(!authorization){
        return res.status(400).json({message: 'Token not found!'});
    }

    const bearerToken = authorization.split(' ');
    
    if(bearerToken?.length != 2){
        return res.status(400).json({message: 'Token not formatted!'});
    }

    let userId: any = null;

    try{
        userId = JWT.verify(bearerToken[1], process.env.TOKEN_KEY as string);
    }catch(err){
        userId = null;
    }

    if(!userId){
        return res.status(400).json({message: 'Invalid token!'});
    }

    ContractorModel.findOne({_id: userId}).then(contractor => {
        if(contractor){
            req.headers.authorization = userId as string;
        }else{
            EgressModel.findOne({_id: userId}).then(egress => {
                if(egress){
                    req.headers.authorization = userId as string;
                }else{
                    return res.status(400).json({message: 'User not found!'});
                }
            });
        }
    });

    next();
} 