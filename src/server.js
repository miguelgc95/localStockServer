import express from 'express';

import config from './config/index.js';
//import { authMiddleware, errorMiddleware } from './middlewares/index.js';

import { userRouter, businessUserRouter, itemRouter } from './routes/index.js';

const app = express();

//app.use(authMiddleware);

app.use('/user', userRouter);
app.use('/businessUser', businessUserRouter);
app.use('/item', itemRouter);

//app.use(errorMiddleware);

export default app;
