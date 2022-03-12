import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import connectDB from './config/db.js';
import fetch from 'node-fetch'

// Routes
import articlesRouter from './routes/articlesRoutes.js';
import coursesRouter from './routes/coursesRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import cryptoDataRouter from './routes/cryptoDataRoutes.js'

import { Router } from 'express';
const router = Router();

connectDB();

const app = express();

app.use(json());

// Set Routes
app.use('/api/articles', articlesRouter);
app.use('/api/courses', coursesRouter);
// app.use('/api/users', usersRoutes);
app.use('/api/cryptoData', cryptoDataRouter)

const key = process.env.apikey;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server running on port ' + PORT));

