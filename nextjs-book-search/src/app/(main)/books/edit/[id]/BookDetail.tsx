import Image from 'next/image'
import Link from 'next/link'
import type { Book } from '@/types/book/type'

type BookDetailsProps = {
  index?: number
  width?: number
  height?: number
  book: Book
}

/**
 * 書籍詳細情報
 */
export default function BookDetail({ width = 140, height = 200, book }: BookDetailsProps) {
  return (
    <>
      <div className="w-full mb-4 flex flex-row justify-start">
        {book.image ? (
          <Link href={book.previewLink}>
            <Image
              className="w-auto h-auto min-w-[140px] sm:min-w-auto"
              src={book.image}
              alt={book.title}
              width={width}
              height={height}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
        ) : (
          <Link href={book.previewLink}>
            <div className="w-[140px] h-[200px] bg-gray-200 flex items-center justify-center">
              No Image
            </div>
          </Link>
        )}
        <ul className="list-noe text-white ml-10">
          <li className="my-1 text-cyan-500">{book.title}</li>
          <li className="my-1">{book.author}&ensp;著</li>
          <li className="my-1">{book.publisher}&ensp;刊</li>
          <li className="my-1">{book.published}&ensp;発売</li>
        </ul>
        <hr />
      </div>
      <div className="my-2" dangerouslySetInnerHTML={{ __html: book.description }}></div>
    </>
  )
}
