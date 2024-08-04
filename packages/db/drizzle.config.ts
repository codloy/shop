import { defineConfig } from 'drizzle-kit';

if (!process.env.DB_URL) {
  throw new Error('DB_URL not found');
}

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/lib/db/tables/index.ts',
  out: './src/lib/db/migrations',
  dbCredentials: {
    url: process.env.DB_URL,
  },
});
