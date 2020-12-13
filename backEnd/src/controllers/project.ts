import { Request, Response} from 'express';

import ContractorModel from '../models/contractor';
import ProjectModel from '../models/project';
import EgressModel from '../models/egress';
import IProject from '../@Types/IProject';
import IEgress from '../@Types/IEgress';

class ProjectController {
    public static async create(req: Request, res: Response){
        const body = req.body as IProject;

        const contractor = await ContractorModel.findOne({_id: req.headers.authorization});

        if(contractor) {
            ProjectModel.create({...body, contractor: contractor?.id, devs: []}).then(project => {
                return res.status(200).json({
                    message: 'Project created successfully',
                    project: {
                        id: project.id,
                        projectName: project.projectName,
                        description: project.description,
                        technologies: project.technologies,
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
            const myProjects = await ProjectModel.find({contractor: contractor});

            const devsAux = [];
            const projectsAux: IProject[] = [];

            for(let project of myProjects) {
                for(let dev of project.devs as IEgress[]){
                    const devAux = await EgressModel.findOne({_id: dev});
                    devsAux.push({
                        name: devAux?.name,
                        surname: devAux?.surname,
                        email: devAux?.email,
                        description: devAux?.description,
                    });
                }
                projectsAux.push({
                    projectName: project.projectName,
                    description: project.description,
                    technologies: project.technologies,
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
                const myProjects = await ProjectModel.find();

                return res.status(200).json(myProjects.filter(project => {
                    let respAux = false;
                    project.devs?.map(dev => {
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

        const userId = req.headers.authorization;

        const contractor = await ContractorModel.findOne({_id: userId});

        if (contractor) {
            ProjectModel.update({_id: reqBody.id}, reqBody).then(() => {
                return res.status(200).json({message: 'Project update!'})
            }).catch(err => {
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
