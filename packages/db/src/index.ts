import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './tables';
import 'dotenv/config';

export const db = drizzle(postgres(process.env.DB_URL || ''), { schema });
