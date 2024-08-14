import express from 'express';
import cors from 'cors';
import messageRouter from './routers/book';
import config from './config';

const app = express();
const port = 8000;


app.use(express.json());
app.use('/messages', messageRouter);
app.use(cors(config.corsOptions));

const run = async () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
run().catch((err) => {
  console.log(err);
});