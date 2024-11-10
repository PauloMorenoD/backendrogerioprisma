import express from 'express';
import donatesRoutes from './routes/donates.routes.js';

const app = express();

app.use(express.json());

app.use("/donates", donatesRoutes)

export default app