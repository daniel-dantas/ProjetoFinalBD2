import { Router } from 'express';

import ContractorRouter from './contractor';
import EgressRouter from './egress';
import UserRouter from './user';
import ProjectRouter from './project';
import TeamRouter from './team';

const route = Router();

route.use('/contractor',ContractorRouter);
route.use('/egress', EgressRouter);
route.use('/user', UserRouter);
route.use('/project', ProjectRouter);
route.use('/team', TeamRouter);

export default route;