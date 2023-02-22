import { IForumPost } from '../../@types/forumpost'
import { DateUtils } from '../date-utils'
import { RandUtils } from '../rand-utils'
import { UserListData } from './user'

export const ForumListData = [
  {
    id: '1',
    title: 'Como lidar com o público',
    content:
      'Lidar com o público não é uma tarefa fácil, mas podemos lidar com isso de forma',
    author: UserListData[RandUtils.rand(1, UserListData.length - 1)],
    status: 'Publicado',
    createdAt: DateUtils.randonDate().toDateString(),
  },
  {
    id: '2',
    title: 'Moeda nacional e os desfios do negócio',
    content:
      'Moedas nacionais é um evento que vai mudar a vida dos empreendedores',
    author: UserListData[RandUtils.rand(1, UserListData.length - 1)],
    status: 'Publicado',
    createdAt: DateUtils.randonDate().toDateString(),
  },
  {
    id: '3',
    title: 'Desenvolvimento de negócios',
    content:
      'Aprenda estratégias para crescer e expandir os negócios, bem como marketing e vendas',
    author: UserListData[RandUtils.rand(1, UserListData.length - 1)],
    status: 'Publicado',
    createdAt: DateUtils.randonDate().toDateString(),
  },
  {
    id: '4',
    title: 'Finanças empresariais',
    content:
      'como gerenciar e monitorar finanças, planejamento orçamentário, investimentos e captação de recursos',
    author: UserListData[RandUtils.rand(1, UserListData.length - 1)],
    status: 'Publicado',
    createdAt: DateUtils.randonDate().toDateString(),
  },
  {
    id: '5',
    title: 'Gestão de recursos humanos',
    content:
      'como contratar, treinar e motivar funcionários, além de lidar com questões relacionadas a salários e benefícios',
    author: UserListData[RandUtils.rand(1, UserListData.length - 1)],
    status: 'Publicado',
    createdAt: DateUtils.randonDate().toDateString(),
  },
  {
    id: '6',
    title:
      'implementação de soluções tecnológicas e como inovar em produtos e serviços',
    content:
      'como contratar, treinar e motivar funcionários, além de lidar com questões relacionadas a salários e benefícios',
    author: UserListData[RandUtils.rand(1, UserListData.length - 1)],
    status: 'Publicado',
    createdAt: DateUtils.randonDate().toDateString(),
  },
] as IForumPost[]
