import { Router } from 'express';

const mainRouter = Router();

mainRouter.get('/', (request, response) => {
    return response
        .status(200)
        .json({ message: 'working' });
});

export default mainRouter;
