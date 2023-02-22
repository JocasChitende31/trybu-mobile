import { IEvent } from '../../@types/event'
import { RandUtils } from '../rand-utils'
import { UserListData } from './user'

export const EventListData = [
  {
    id: '1',
    title: 'Encontro dos empreendedores',
    address: 'Talatona',
    contact: '923123456',
    description:
      'Encontro dos empreendedores é um evento que vai mudar a vida dos empreendedores',
    startsAt: new Date().toISOString(),
    endsAt: new Date().toISOString(),
    author: UserListData[RandUtils.rand(1, UserListData.length - 1)],
    price: '15.000kz',
    status: 'Publicado',
  },
  {
    id: '2',
    title: 'Moedas nacionais',
    address: 'Talatona',
    contact: '923123456',
    description:
      'Moedas nacionais é um evento que vai mudar a vida dos empreendedores',
    startsAt: new Date().toISOString(),
    endsAt: new Date().toISOString(),
    author: UserListData[RandUtils.rand(1, UserListData.length - 1)],
    price: '25.000kz',
    status: 'Publicado',
  },
  {
    id: '3',
    title: 'Empreendedor de sucesso',
    address: 'Talatona',
    contact: '923123456',
    description:
      'Empreendedor de sucesso é um evento que vai mudar a vida dos empreendedores',
    startsAt: new Date().toISOString(),
    endsAt: new Date().toISOString(),
    author: UserListData[RandUtils.rand(1, UserListData.length - 1)],
    price: '25.000kz',
    status: 'Publicado',
  },
  {
    id: '4',
    title: 'Negócio em 2023',
    address: 'Talatona',
    contact: '923123456',
    description:
      'Negócio em 2023 é um evento que vai mudar a vida dos empreendedores',
    startsAt: new Date().toISOString(),
    endsAt: new Date().toISOString(),
    author: UserListData[RandUtils.rand(1, UserListData.length - 1)],
    price: '25.000kz',
    status: 'Publicado',
  },
] as IEvent[]
