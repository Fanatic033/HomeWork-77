import express from 'express';
import fileDb from '../fileDb';
import {MessageMutation} from '../types';
import {imagesUpload} from '../multer';

const messageRouter = express.Router();


messageRouter.get('/', async (req, res) => {
  const posts = await fileDb.getItems();
  return res.send(posts);
});

messageRouter.post('/', imagesUpload.single('image'), async (req, res) => {
  if (!req.body.message) {
    return res.status(400).send({error: 'Message is missing'});
  }
  const post: MessageMutation = {
    author: req.body.author,
    message: req.body.message,
    image: req.file ? req.file.filename : null,
  };

  const savedPost = await fileDb.addItem(post);
  return res.send(savedPost);

});


export default messageRouter;