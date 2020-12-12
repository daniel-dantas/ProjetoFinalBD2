import { Router } from 'express';

import ProjectController from '../controllers/project';
import AuthMiddleware from '../middlewares/auth';

const route = Router();

route.use(AuthMiddleware);
route.post('/', ProjectController.create);
route.get('/', ProjectController.read);
route.put('/', ProjectController.update);
export default route;
