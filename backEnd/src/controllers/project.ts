import { Request, Response} from 'express';

import ContractorModel from '../models/contractor';
import ProjectModel from '../models/project';
import EgressModel from '../models/egress';
import IProject from '../@Types/IProject';
import IEgress from '../@Types/IEgress';
import { Model } from 'sequelize/types';

class ProjectController {
    public static async create(req: Request, res: Response){
        const body = req.body as IProject;

        const contractor = await ContractorModel.findOne({_id: req.headers.authorization});

        if(contractor) {
            ProjectModel.create({...body, technologies: JSON.stringify(body.technologies), contractor: contractor?.id, devs: JSON.stringify([])}).then((project) => {
                return res.status(200).json({
                    message: 'Project created successfully',
                    project: {
                        id: (project as any).id,
                        projectName: (project as any).projectName,
                        description: (project as any).description,
                        technologies: (project as any).technologies,
                        contractor: {
                           name: contractor.name,
                           companyName: contractor.companyName,
                        },
                    } as IProject,
                })
            }).catch(err => {
                return res.status(400).json({
                    message: 'Project creation failed'
                });
            })
        }else{
            return res.status(400).json({
                message: 'Project creation failed'
            });
        }

    }

    public static async read(req: Request, res: Response){
        const userId = req.headers.authorization;

        const contractor = await ContractorModel.findOne({_id: userId});
        
        if (contractor) {
            const myProjects = await ProjectModel.findAll({where: {contractor: contractor.id}});

            const devsAux = [];
            const projectsAux: IProject[] = [];
            
            for(let project of myProjects as any[]) {
                console.log(myProjects);
                for(let dev of JSON.parse(project.devs) as string[]){
                    console.log(dev);
                    const devAux = await EgressModel.findOne({_id: dev});
                    devsAux.push({
                        name: devAux?.name,
                        surname: devAux?.surname,
                        email: devAux?.email,
                        description: devAux?.description,
                    });
                }
                projectsAux.push({
                    id: project.id,
                    projectName: project.projectName,
                    description: project.description,
                    technologies: JSON.parse(project.technologies),
                    contractor: {
                        name: contractor.name,
                        surname: contractor.surname,
                        email: contractor.email,
                        companyName: contractor.companyName,
                    },
                    devs: devsAux,
                } as IProject);
            }

            return res.status(200).json(projectsAux);
        }else{

            const egress = await EgressModel.findOne({_id: userId});

            if (egress) {
                const myProjects = await ProjectModel.findAll() as Model<IProject, IProject>[];
                return res.status(200).json(myProjects.filter(project => {
                    let respAux = false;
                    (JSON.parse((project as any).devs as string) as string[])?.map((dev) => {
                        respAux = dev == egress.id;
                    });
                    return respAux;
                }));

            } else {
                return res.status(400).json({
                    message: 'User not found!'
                });
            }
        }

    }

    public static async update(req: Request, res: Response){
        
        const reqBody = req.body as IProject;

        (reqBody as any).technologies = JSON.stringify(reqBody.technologies);

        const projectResponse = await ProjectModel.findOne({where: {id: reqBody.id}});

        reqBody.devs = (projectResponse as any).devs;

        const userId = req.headers.authorization;

        const contractor = await ContractorModel.findOne({_id: userId});
        console.log(contractor);
        if (contractor) {
            ProjectModel.update(reqBody, {where: {id: reqBody.id}}).then(() => {
                return res.status(200).json({message: 'Project update!'})
            }).catch(err => {
                console.log(err);
                return res.status(500).json({message: 'User not found!'});
            });
        } else {
            return res.status(400).json({
                message: 'User not found!'
            });
        }
    }
}

export default ProjectController;
