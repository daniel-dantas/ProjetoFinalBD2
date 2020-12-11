import { NextFunction, Request, Response } from 'express';
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

    const userId = JWT.verify(bearerToken[1], process.env.TOKEN_KEY as string);

    if(!userId){
        return res.status(400).json({message: 'Invalid token!'});
    }

    req.headers.authorization = userId as string;

    next();
} 