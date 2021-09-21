import express from 'express';

import config from './config/index.js';
//import { authMiddleware, errorMiddleware } from './middlewares/index.js';

const app = express();

//app.use(authMiddleware);

app.get('/', (req, res) => {
    res.send('que dise');
});

//app.use(errorMiddleware);

export default app;
