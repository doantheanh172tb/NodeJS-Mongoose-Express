import express from 'express';

//Controller Imports
import baseController from './controllers/baseController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

const routes = express();

//Basic Routes
routes.get('/', baseController.get);

//User Routes
routes.post('/signup', userController.post);

//Post Routes
routes.post('/post', postController.post);
routes.get('/post/getAll', postController.getAll);

//Comment Routes
routes.post('/comment', commentController.post);

export default routes;