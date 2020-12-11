import { Request, Response} from 'express';

import ContractorModel from '../models/contractor';
import ProjectModel from '../models/project';
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
}

export default ProjectController;
