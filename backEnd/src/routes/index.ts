import { Router } from 'express';

import ContractorRouter from './contractor';
import EgressRouter from './egress';

const route = Router();

route.use('/contractor',ContractorRouter);
route.use('/egress', EgressRouter);

export default route;