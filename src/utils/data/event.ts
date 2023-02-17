import { IEvent } from '../../@types/event'

export const EventList = [
  {
    id: '1',
    title: 'Encontro dos empreendedores',
    address: 'Talatona',
    contacts: '923123456',
    description:
      'Encontro dos empreendedores é um evento que vai mudar a vida dos empreendedores',
    startAt: new Date().toISOString(),
    endAt: new Date().toISOString(),
    owner: 'Xando',
    price: '15.000kz',
    status: 'Publicado',
  },
  {
    id: '2',
    title: 'Moedas nacionais',
    address: 'Talatona',
    contacts: '923123456',
    description:
      'Moedas nacionais é um evento que vai mudar a vida dos empreendedores',
    startAt: new Date().toISOString(),
    endAt: new Date().toISOString(),
    owner: 'Trybu',
    price: '25.000kz',
    status: 'Publicado',
  },
  {
    id: '3',
    title: 'Empreendedor de sucesso',
    address: 'Talatona',
    contacts: '923123456',
    description:
      'Empreendedor de sucesso é um evento que vai mudar a vida dos empreendedores',
    startAt: new Date().toISOString(),
    endAt: new Date().toISOString(),
    owner: 'Trybu',
    price: '25.000kz',
    status: 'Publicado',
  },
  {
    id: '4',
    title: 'Negócio em 2023',
    address: 'Talatona',
    contacts: '923123456',
    description:
      'Negócio em 2023 é um evento que vai mudar a vida dos empreendedores',
    startAt: new Date().toISOString(),
    endAt: new Date().toISOString(),
    owner: 'Trybu',
    price: '25.000kz',
    status: 'Publicado',
  },
] as IEvent[]
