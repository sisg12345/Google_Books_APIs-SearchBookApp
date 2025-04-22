import { findAllReviews, findReviewById } from './repository'
import { createBookInfo } from './service'
import type { Book, BookInfo, BookInfos } from '@/types/book/type'
import { fetcher } from '@/utils/fetcher'

/**
 * 検索キーワードを元に書籍検索
 * @param keyword 検索キーワード
 * @param startIndex 検索開始位置
 * @returns 書籍情報の一覧
 */
export async function searchBooksByKeyword(keyword: string, startIndex: number): Promise<Book[]> {
  const result = await fetcher<BookInfos>(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=ja&startIndex=${startIndex}&maxResults=20&printType=books`,
  )

  // 返却する書籍情報
  const books: Book[] = []
  result?.items?.forEach((book) => {
    books.push(createBookInfo(book))
  })

  return books
}

/**
 * 書籍idを元に書籍検索
 * @param id
 * @returns 書籍情報
 */
export async function searchBookById(id: string): Promise<Book> {
  const result = await fetcher<BookInfo>(`https://www.googleapis.com/books/v1/volumes/${id}`)

  return createBookInfo(result)
}

/**
 * 全レビュー取得
 * @returns 全レビュー
 */
export async function searchAllReviews(): Promise<Book[]> {
  const result = await findAllReviews()

  if (result) {
    return result.map(({ id, title, author, publisher, published, imageUrl }) => {
      return {
        id,
        title,
        author,
        publisher,
        published,
        image: imageUrl,
      }
    })
  }

  return result
}

/**
 * レビュー情報取得
 * @param id 書籍id
 * @returns レビュー情報
 */
export async function searchReviewById(
  id: string,
): Promise<{ id: string; memo: string; updatedAt: string } | null> {
  const result = await findReviewById(id)

  if (result) {
    return {
      id: result.id,
      memo: result.memo,
      updatedAt: result.updatedAt.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }),
    }
  }

  return result
}
