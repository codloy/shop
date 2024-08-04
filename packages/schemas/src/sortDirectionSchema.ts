import z from 'zod';
import { sortDirections } from 'common';

export const sortDirectionSchema = z.enum(sortDirections);

export type SortDirectionSchema = z.infer<typeof sortDirectionSchema>;
