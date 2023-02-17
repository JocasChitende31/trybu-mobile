export type IEvent = {
  id: string
  title: string
  description: string
  owner: string
  address: string
  startAt: string
  endAt: string
  price: string
  status: 'Publicado' | 'Pendente' | 'Inactivo'
  contacts: string
}
