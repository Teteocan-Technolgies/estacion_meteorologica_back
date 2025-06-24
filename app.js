import express, { json } from 'express';

const app = express();
app.use(json());
app.disable('x-powered-by');

