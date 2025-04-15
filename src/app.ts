import './config/dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import countryRoutes from './routes/country.routes';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middleware/errorHandler';
import { responseFormatter } from './middleware/responseFormatter';

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(responseFormatter);

// Routes
app.use('/api/countries', countryRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;