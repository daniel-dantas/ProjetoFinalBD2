import UserController from '../controllers/user';
import { Router } from 'express';

import AuthMiddleware from '../middlewares/auth';

const route = Router();

route.post('/auth', UserController.authentication);

route.use(AuthMiddleware);
route.post('/me', UserController.UserMe);

export default route;
