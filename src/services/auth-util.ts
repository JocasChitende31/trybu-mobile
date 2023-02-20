import { LocalStorage } from '../infra/cache/localstorage'

export class AuthUtil {
  static async signOut() {
    LocalStorage.remove('@TOKEN')
    LocalStorage.remove('@USER')
  }

  static async getToken() {
    return await LocalStorage.get('@TOKEN')
  }

  static async setToken(token: string) {
    await LocalStorage.set('@TOKEN', token)
    await LocalStorage.set('@FIRSTTIME', 'false')
  }

  static async setUser(user: any) {
    await LocalStorage.set('@USER', JSON.stringify(user))
  }

  static async getUser() {
    const user = await LocalStorage.get('@USER')
    return user ? JSON.parse(user) : null
  }

  static async firstTime() {
    return (await LocalStorage.get('@FIRSTTIME')) ? false : true
  }
}
