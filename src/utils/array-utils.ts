export class ArrayUtils {
  static convertToArray(data: string, delimiter: string = ''): any[] {
    return data.trim().split(delimiter)
  }
}
