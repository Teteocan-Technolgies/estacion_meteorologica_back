import express, { json } from 'express';
import { anomaliaRouter } from './routes/anomalias.js';

const app = express();
app.use(json());
app.disable('x-powered-by');

app.use('/anomalias', anomaliaRouter);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})

