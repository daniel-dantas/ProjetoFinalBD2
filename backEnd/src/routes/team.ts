import { Router } from 'express';

import TeamController from '../controllers/team';
import AuthMiddleware from '../middlewares/auth';

const route = Router();

route.use(AuthMiddleware);
route.post('/insert', TeamController.insert);
route.get('/read', TeamController.read);
route.delete('/remove', TeamController.remove);

export default route;
