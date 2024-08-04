import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as tables from './tables';
import { type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import 'dotenv/config';

declare global {
  var db: PostgresJsDatabase<typeof tables>;
}

let db: PostgresJsDatabase<typeof tables>;

if (!process.env.DB_URL) {
  throw new Error('DB_URL not found');
}

if (process.env.NODE_ENV === 'production') {
  db = drizzle(postgres(process.env.DB_URL), { schema: tables });
} else {
  if (!global.db)
    global.db = drizzle(postgres(process.env.DB_URL), { schema: tables });

  db = global.db;
}

export { db };

export * from 'drizzle-orm';
export * from './tables';
