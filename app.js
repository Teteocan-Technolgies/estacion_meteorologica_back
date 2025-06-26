import express, { json } from 'express';
import { anomaliaRouter } from './routes/anomalias.js';
import { temp_humedadRouter } from './routes/temp_humedad.js';
import { corsMiddleware } from './middlewares/cors.js';

const app = express();
app.use(json());
app.use(corsMiddleware())
app.disable('x-powered-by');

app.use('/api/anomalias', anomaliaRouter);
app.use('/api/humedad_temp', temp_humedadRouter)

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})

