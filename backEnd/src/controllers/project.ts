import { Request, Response} from 'express';

import ContractorModel from '../models/contractor';
import ProjectModel from '../models/project';
import EgressModel from '../models/egress';
import IProject from '../@Types/IProject';

class ProjectController {
    public static async create(req: Request, res: Response){
        const body = req.body as IProject;

        const contractor = await ContractorModel.findOne({_id: req.headers.authorization});

        if(contractor) {
            ProjectModel.create({...body, contractor: contractor?.id, devs: []}).then(project => {
                return res.status(200).json({
                    message: 'Project created successfully',
                    project: {
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
            
            return res.status(200).json(myProjects);
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
}

export default ProjectController;
