export class UrlSearchParamsHandler {
  public static setSearchParamsToURL(
    url: URL,
    searchParams: URLSearchParams
  ): URL {
    for (const [key, value] of searchParams) {
      url.searchParams.set(key, value)
    }
    return url
  }
}
