import UserController from '../controllers/user';
import { Router } from 'express';

const route = Router();

route.post('/auth', UserController.authentication);

export default route;
