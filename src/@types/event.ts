import { IUser } from './user'

export type IEvent = {
  id: string
  title: string
  picture: string
  description: string
  owner: string
  address: string
  startsAt: string
  endsAt: string
  price: string
  status: 'Publicado' | 'Pendente' | 'Inactivo' | null
  contact: string
  authorId: string
  author?: IUser
  createdAt: string
  updatedAt: string
}
