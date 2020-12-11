import { Router } from 'express';
import ContractorController from '../controllers/contractor';
import AuthMiddleware from '../middlewares/auth';

const route = Router();

route.post('/', ContractorController.create);

route.use(AuthMiddleware);
route.get('/', ContractorController.read);
route.put('/', ContractorController.update);
route.delete('/', ContractorController.delete);

export default route;
