import { Router } from 'express';
import EgressController from '../controllers/egress';
import AuthMiddleware from '../middlewares/auth';

const route = Router();

route.post('/', EgressController.create);
route.get('/', EgressController.read);

route.use(AuthMiddleware);
route.put('/', EgressController.update);
route.delete('/', EgressController.delete);


export default route;
