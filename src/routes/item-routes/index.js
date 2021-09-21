import { Router } from 'express';

//import { signUp, signOut, deleteUser, getUserInfo } from '../../controllers/user-controller.js';

const itemRouter = Router();

itemRouter.get('/', (req, res) => {
    res.send('que dise item');
});

// itemRouter.delete('/delete/:item', deleteItem);

// itemRouter.get('/:itemName', getItemInfo);

export default itemRouter;
