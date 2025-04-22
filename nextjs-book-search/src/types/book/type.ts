// 書籍情報一覧
export type BookInfos = {
  items: BookInfo[]
}

// 書籍情報
export type BookInfo = {
  id: string
  volumeInfo: {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    imageLinks: {
      smallThumbnail: string
    }
    previewLink: string
  }
}

// 本の情報
export type Book = {
  id: string
  title: string
  author: string
  publisher: string
  published: string
  description: string
  image: string
  previewLink: string
}
