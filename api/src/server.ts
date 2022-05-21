import express from 'express';
import morgan from 'morgan';
import router from './router';

const app = express();
app.use(morgan("common"));
app.use('/', router);

app.listen(3000);  // PORT