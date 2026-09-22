//modulo para fazer as rotas
import Router from 'express';
import { chefsController } from "../controllers/chefsController.js"

const router = Router();

router.get('/chef', chefsController.getAll);
router.get('/chef/:id', chefsController.get);
router.put('/chef/:id', chefsController.update);
router.patch('/chef/:id', chefsController.patch);
router.delete('/chef/:id', chefsController.delete);

export default router;