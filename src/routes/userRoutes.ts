import { Router } from 'express';
import * as UserController from '../controllers/userController';

const router = Router();

router.post('/register', UserController.createUser);
router.post('/login', UserController.loginUser);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);
router.get('/get/:id', UserController.getUser);

export default router;
