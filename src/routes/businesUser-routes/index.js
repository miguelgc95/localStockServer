import { Router } from 'express';

//import { signUp, signOut, deleteUser, getUserInfo } from '../../controllers/user-controller.js';

const businessUserRouter = Router();

businessUserRouter.get('/', (req, res) => {
    res.send('que dise business');
});
// businessUserRouter.post('/sign-up', signUp);
// businessUserRouter.post('/sign-out', signOut);

// businessUserRouter.delete('/delete', deleteUser);

// businessUserRouter.get('/:businessName', getUserInfo);

export default businessUserRouter;
