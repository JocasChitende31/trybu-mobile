export class UrlUtils {
  static apiBaseUrl(): string {
    return process.env.API_BASE_URL
  }

  static uploadUrl(): string {
    return `${this.apiBaseUrl()}/uploads`
  }
}
