import { Router } from 'express';
import EgressController from '../controllers/egress';

const route = Router();

route.post('/', EgressController.create);
route.get('/', EgressController.read);
route.delete('/', EgressController.delete);
route.put('/', EgressController.update);


export default route;
