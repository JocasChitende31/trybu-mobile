import { IEvent } from './event'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      start: undefined
      signin: undefined
      signup: undefined
      services: undefined
      events: undefined
      eventdetail: {
        event: IEvent
      }
      newevent: undefined
      detail: {
        id: string
      }
      profile: undefined
      editprofile: undefined
    }
  }
}
