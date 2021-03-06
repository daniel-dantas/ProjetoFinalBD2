import { Router } from 'express';

import TeamController from '../controllers/team';
import AuthMiddleware from '../middlewares/auth';

const route = Router();

route.use(AuthMiddleware);
route.post('/insert', TeamController.insert);
route.get('/read', TeamController.read);
route.post('/remove', TeamController.remove);
route.post('/finally', TeamController.finallyTeam);

export default route;
