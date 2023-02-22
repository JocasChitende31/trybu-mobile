import { IUser } from '../../@types/user'
import { DateUtils } from '../date-utils'

export const UserListData = [
  {
    id: '1',
    name: 'Admin Test',
    email: 'admin@gmail.com',
    username: 'admin',
    password: 'admin',
    createdAt: DateUtils.randonDate().toDateString(),
  },
  {
    id: '2',
    name: 'Samuel Freitas',
    email: 'samuelfreitas.ao@gmail.com',
    username: 'samuel',
    password: '123456',
    createdAt: DateUtils.randonDate().toDateString(),
  },
  {
    id: '3',
    name: 'Jeorgel Dev',
    email: 'jeorgel@gmail.com',
    username: 'jeorgel',
    password: '123456',
    createdAt: DateUtils.randonDate().toDateString(),
  },
  {
    id: '4',
    name: 'Solange CEO',
    email: 'solange@gmail.com',
    username: 'solange',
    password: '123456',
    createdAt: DateUtils.randonDate().toDateString(),
  },
] as IUser[]
