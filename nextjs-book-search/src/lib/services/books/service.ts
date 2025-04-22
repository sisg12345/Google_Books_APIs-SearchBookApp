import type { Book, BookInfos } from '@/types/book/type'

/**
 * 書籍情報を作成
 * @param book 書籍情報一覧
 * @returns 書籍情報
 */
export function createBookInfo(book: BookInfos['items'][number]): Book {
  const {
    id,
    volumeInfo: {
      title = '',
      authors = [],
      publisher = '',
      publishedDate = '',
      description = '',
      imageLinks = '',
      previewLink = '',
    },
  } = book

  return {
    id,
    title,
    author: authors ? authors.join('') : '',
    publisher,
    published: publishedDate,
    description,
    image: imageLinks ? imageLinks.smallThumbnail : '',
    previewLink,
  }
}
