import { Router } from 'express';

//import { signUp, signOut, deleteUser, getUserInfo } from '../../controllers/user-controller.js';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('que dise user');
});
// userRouter.post('/sign-up', signUp);
// userRouter.post('/sign-out', signOut);

// userRouter.delete('/delete', deleteUser);

// userRouter.get('/:userName', getUserInfo);

export default userRouter;
