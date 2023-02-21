export class DateUtils {
  private static readonly months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  public static getDate(date: Date, separator: string = '/'): string {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    return `${day}${separator}${month}${separator}${date.getFullYear()}`
  }

  public static getDateTime(date: Date, separator: string = '/') {
    return `${this.getDate(date, separator)} ${this.getTime(date)}`
  }

  public static getDateTimeMinute(date: Date, separator: string = '/') {
    return `${this.getDate(date, separator)} ${this.getHourMinute(date)}`
  }

  public static getDateEn(date: Date, separator: string = '-'): string {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    return `${date.getFullYear()}${separator}${month}${separator}${day}`
  }

  public static getDateTimeEn(date: Date, separator: string = '/') {
    return `${this.getDateEn(date, separator)} ${this.getTime(date)}`
  }

  public static getDateExt(date: Date, separator: string = '/'): string {
    return `${date.getDate()}${separator}${
      this.months[date.getMonth()]
    }${separator}${date.getDate()}${separator}`
  }

  public static getTime(date: Date) {
    const hour = date.getHours().toString().padStart(2, '0')
    const minute = date.getMinutes().toString().padStart(2, '0')
    const second = date.getSeconds().toString().padStart(2, '0')
    return `${hour}:${minute}:${second}`
  }

  public static getHourMinute(date: Date) {
    const hour = date.getHours().toString().padStart(2, '0')
    const minute = date.getMinutes().toString().padStart(2, '0')
    return `${hour}:${minute}`
  }
}
