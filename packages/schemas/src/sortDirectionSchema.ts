import z from 'zod';
import { sortDirections } from './sortDirections';

export const sortDirectionSchema = z.enum(sortDirections);

export type SortDirectionSchema = z.infer<typeof sortDirectionSchema>;
