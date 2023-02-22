import { IUser } from "./user"

export type IForumPost = {
  id: string
  title: string
  picture: string
  status: string
  content: string
  authorId: string
  author: IUser
  createdAt: string
  updatedAt: string
}