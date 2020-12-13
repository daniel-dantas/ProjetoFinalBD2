import { Request, Response, json } from 'express';

import EgressModel from '../models/egress';
import ProjectModel from '../models/project';

import Redis from '../databases/redis';
import IEgress from '../@Types/IEgress';

class TeamController {
    public static async insert(req: Request, res: Response){
        const userId = req.headers.authorization;
        const reqBody = req.body as { egress: string };        

        const egress = await EgressModel.findOne({_id: reqBody.egress});

        if(egress){
            
            Redis.get(userId as string, (error, value) => {

                if(value){
                    const team = JSON.parse(value) as string[];

                    team.push(reqBody.egress);

                    Redis.setex(userId as string, 3600, JSON.stringify(team));

                    return res.status(200).json({message: 'Egress added team!'});

                }else{
                    const team = [reqBody.egress];

                    Redis.setex(userId as string, 3600, JSON.stringify(team));

                    return res.status(200).json({message: 'Egress added team!'});
                }

            });
            
            JSON.stringify(userId, egress.id);
        }else{
            return res.status(400).json({message: 'Egress not found!'});
        }
    }

    public static async read(req: Request, res: Response){
        
        const userId = req.headers.authorization;
        
        Redis.get(userId as string, async (err, value) => {
            if(value){
                const team = JSON.parse(value);
                
                const teamResponse: IEgress[] = [];
                
                for(let egressId of team){
                    const egress = await EgressModel.findOne({_id: egressId}) as IEgress;
                    teamResponse.push({
                        id: egress.id,
                        name: egress.name,
                        surname: egress.surname,
                        email:egress.email,
                        technologies: egress.technologies,
                    } as IEgress);
                }

                return res.status(200).json(teamResponse);
            }else{
                return res.status(200).json([]);
            }
        });
    }

    public static async remove(req: Request, res: Response){
        const userId = req.headers.authorization;
        const reqBody = req.body as { egress: string };

        Redis.get(userId as string, (err, value) => {
            if(value){
                const team = JSON.parse(value) as string[];

                const result = team.filter(egr => egr !== reqBody.egress);

                if(team.length === result.length){
                    return res.status(400).json({message: 'Egress not found in team!'});
                }

                Redis.setex(userId as string, 3600, JSON.stringify(result));

                return res.status(200).json({message: 'Egress removed!'});

            }else{
                return res.status(400).json({
                    message: 'Team not found',
                });
            }
        });
    }

    public static finallyTeam (req: Request, res: Response){
        const userId = req.headers.authorization;

        const reqBody = req.body as { project: string };

        Redis.get(userId as string, async (err, value) => {
            if(value){
                const team = JSON.parse(value);

                const project = await ProjectModel.findOne({_id: reqBody.project});

                if(project){
                    project.devs = project.devs?.concat(team);
                    await ProjectModel.update({_id: project.id}, project);
                    Redis.del(userId as string);
                    return res.status(200).json({
                        message: 'Team finally!'
                    });
                }else{
                    return res.status(400).json({message: 'Project not found!'})
                }

            }else{
                return res.status(400).json({message: 'Team empty'})
            }
        });

    }

}

export default TeamController;
