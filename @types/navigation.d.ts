import { IUser } from '../src/@types/user'
import { IEvent } from './event'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      start: undefined
      signin: undefined
      signup: undefined
      passwordrecover: undefined

      services: undefined
      newservice: undefined

      events: undefined
      eventdetail: {
        event: IEvent
      }
      newevent: undefined

      profile: {
        user: IUser
      }
      editprofile: {
        backto: undefined
        user: IUser
      }

      forums: undefined
      newforumpost: undefined
    }
  }
}
