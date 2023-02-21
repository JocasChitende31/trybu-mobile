export type IEvent = {
  id: string
  title: string
  description: string
  owner: string
  address: string
  startsAt: string
  endsAt: string
  price: string
  status: 'Publicado' | 'Pendente' | 'Inactivo' | null
  contacts: string
}
