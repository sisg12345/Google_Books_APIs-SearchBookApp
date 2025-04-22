/**
 * fetchをラップした関数
 * 指定されたリソースに対してHTTPリクエストを行い、レスポンスをJSONとして返す
 * レスポンスが失敗した場合は、エラーメッセージを含む例外を投げる
 *
 * @param resource リクエストするリソースのURLまたはRequestオブジェクト
 * @param init リクエストの初期化オプション
 * @returns レスポンスのJSONデータ
 * @throws レスポンスが失敗した場合は例外を投げる
 */
export const fetcher = async <T>(resource: RequestInfo, init?: RequestInit): Promise<T> | never => {
  // Fetch APIを使用してデータを取得
  const response = await fetch(resource, init)

  // レスポンスが成功しなかった場合はエラーをスロー
  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new Error('Bad Request')
      case 401:
        throw new Error('Unauthorized')
      case 403:
        throw new Error('Forbidden')
      case 404:
        throw new Error('Not Found')
      case 500:
        throw new Error('Internal Server Error')
      case 502:
        throw new Error('Bad Gateway')
      case 503:
        throw new Error('Service Unavailable')
      case 504:
        throw new Error('Gateway Timeout')
      default:
        // その他のエラー
        throw new Error(`HTTP error! status: ${response.status}`)
    }
  }

  // レスポンスのJSONデータを返却
  return await response.json()
}
