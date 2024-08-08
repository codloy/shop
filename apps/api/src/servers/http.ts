import { createServer } from 'http';
import { app } from './express';

export const http = createServer(app);
