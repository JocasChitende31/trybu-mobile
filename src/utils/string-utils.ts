import { ArrayUtils } from './array-utils'

export class StringUtils {
  static getFirstWord(text: string): string {
    return ArrayUtils.convertToArray(text, ' ')[0]
  }

  static getLastWord(text: string): string {
    return ArrayUtils.convertToArray(text, ' ').at(-1)
  }

  static getFirstAndLastWord(text: string): string {
    if (ArrayUtils.convertToArray(text, ' ').length < 1) return text.trim()
    const firstWord = this.getFirstWord(text)
    const secondWord = this.getLastWord(text)
    if (firstWord === secondWord) return firstWord
    return `${firstWord} ${secondWord}`
  }

  static getFirstLetter(text: string): string {
    const letters = text.trim()
    if (!letters) return ''
    return letters[0]
  }

  static getLastLetter(text: string): string {
    return ArrayUtils.convertToArray(text).at(-1)
  }

  static getFirstAndLastLetter(text: string): string {
    const firstLetter = this.getFirstLetter(text)
    const lastLetter = this.getLastLetter(text)
    if (text.trim().length < 2) return text.trim()
    if (firstLetter === lastLetter) return firstLetter
    return `${firstLetter} ${lastLetter}`
  }

  static getAvatarName(text: string): string {
    const initialsName = ArrayUtils.convertToArray(text, ' ').map((x) =>
      x.charAt(0)
    )
    const [first, last] = initialsName

    return `${first}${last}`.toUpperCase()
  }

  static find(text: string, query: string): boolean {
    return text.indexOf(query) > 0
  }

  static startsWith(text: string, query: string): boolean {
    return text.startsWith(query)
  }

  static endsWith(text: string, query: string): boolean {
    return text.endsWith(query)
  }
}
