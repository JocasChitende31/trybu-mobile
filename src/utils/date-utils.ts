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
    const month = date.getDate().toString().padStart(2, '0')
    return `${day}${separator}${month}${separator}${date.getFullYear()}`
  }

  public static getDateExt(date: Date, separator: string = '/'): string {
    return `${date.getDate()}${separator}${
      this.months[date.getDate()]
    }${separator}${date.getDate()}${separator}`
  }
}
