import { AccountTable } from '../tables/account';
import { seedRoles } from './role';

export const seedAccounts: AccountTable[] = [
  {
    id: 'f8e58c58-e56b-4fdd-87af-8b18ac252f91',
    lastName: 'Дэлгэрцэцэг',
    firstName: 'Төгстөгөлдөр',
    username: 'toumku',
    email: 'toumku@gmail.com',
    phoneNumber: '86122811',
    password: '$2a$10$oTYVgFZI8YSfAqYLMxfK7OSGLz4vn7nvq66DSaicFNLpWCPk.51DK',
    roleId: seedRoles[0].id,
    status: 'Approved',
    createdAt: new Date(),
    birthday: '2000-01-01',
    gender: 'Male',
    profilePictureURL: 'https://i.pravatar.cc/300',
  },
  {
    id: '8a5202a0-9bd5-4de3-ad62-bfcd1ac88cf9',
    lastName: 'Админ',
    firstName: 'Админ',
    username: 'admin',
    email: 'admin@codloy.com',
    phoneNumber: '86122812',
    password: '$2a$10$oTYVgFZI8YSfAqYLMxfK7OSGLz4vn7nvq66DSaicFNLpWCPk.51DK',
    roleId: seedRoles[1].id,
    status: 'Approved',
    createdAt: new Date(),
    birthday: '2000-01-01',
    gender: 'Male',
    profilePictureURL: 'https://i.pravatar.cc/300',
  },
  {
    id: '8968731b-9897-4df6-ad4d-39a379b9bfbf',
    lastName: 'Менежэр',
    firstName: 'Менежэр',
    username: 'manager',
    email: 'manager@codloy.com',
    phoneNumber: '86122813',
    password: '$2a$10$oTYVgFZI8YSfAqYLMxfK7OSGLz4vn7nvq66DSaicFNLpWCPk.51DK',
    roleId: seedRoles[2].id,
    status: 'Approved',
    createdAt: new Date(),
    birthday: '2000-01-01',
    gender: 'Male',
    profilePictureURL: 'https://i.pravatar.cc/300',
  },
];
