import { Router } from 'express';

import ContractorRouter from './contractor';
import EgressRouter from './egress';
import UserRouter from './user';
import ProjectRouter from './project';

const route = Router();

route.use('/contractor',ContractorRouter);
route.use('/egress', EgressRouter);
route.use('/user', UserRouter);
route.use('/project', ProjectRouter);

export default route;