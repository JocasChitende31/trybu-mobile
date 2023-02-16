import AsyncStorage from "@react-native-async-storage/async-storage"

export class LocalStorage {
  static async set (key: string, value: string): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, value)
      return true
    } catch (error) {
      console.log('error settoken', error)
      return false
    }
  }

  static async get (key: string): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem(key)
      return token
    } catch (error) {
      console.log('error gettoken', error)

      return null
    }
  }

  static async getAllKeys () {
    try {
      return await AsyncStorage.getAllKeys()
    } catch (error) {
      return null
    }
  }

  static async clear (): Promise<boolean> {
    try {
      await AsyncStorage.clear()
      return true
    } catch (error) {
      console.log('error settoken', error)
      return false
    }
  }

  static async remove (key: string): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(key)
      return true
    } catch (error) {
      console.log('error settoken', error)
      return false
    }
  }
}
