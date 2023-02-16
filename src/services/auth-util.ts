import { LocalStorage } from '../infra/cache/localstorage'

export class AuthUtil {
  static async signOut() {
    LocalStorage.clear()
  }

  static async getToken() {
    return await LocalStorage.get('@TOKEN')
  }

  static async setToken(token: string) {
    await LocalStorage.set('@TOKEN', token)
  }

  static async setUser(user: any) {
    await LocalStorage.set('@USER', JSON.stringify(user))
  }

  static async getUser() {
    const user = await LocalStorage.get('@USER')
    return user ? JSON.parse(user) : null
  }
}
