import { Router } from 'express';
import ContractorController from '../controllers/contractor';

const route = Router();

route.post('/', ContractorController.create);
route.get('/', ContractorController.read);
route.put('/', ContractorController.update);
route.delete('/', ContractorController.delete);

export default route;
