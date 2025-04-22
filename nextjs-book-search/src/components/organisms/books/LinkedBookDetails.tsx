import Link from 'next/link'
import BookDetails from './BookDetails'
import { Book } from '@/types/book/type'

type LinedBookDetailsProps = {
  books: Book[]
}

/**
 * リンク付き書籍詳細情報一覧
 */
export default function LinedBookDetails({ books }: LinedBookDetailsProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {books.map((book) => {
          return (
            <div
              key={book.id}
              className="m-1 p-4 rounded-xl border-4 border-sky-300 bg-gray-800 hover:border-pink-300 max-w-[350px]"
            >
              <Link href={`/books/edit/${book.id}`}>
                <BookDetails book={book} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
