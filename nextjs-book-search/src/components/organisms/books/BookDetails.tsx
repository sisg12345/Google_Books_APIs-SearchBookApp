import Image from 'next/image'
import { Book } from '@/types/book/type'

type BookDetailsProps = {
  index?: number
  width?: number
  height?: number
  book: Book
}

/**
 * 書籍詳細情報
 */
export default function BookDetails({ width = 140, height = 200, book }: BookDetailsProps) {
  return (
    <div className="w-full mb-4 flex flex-col items-center">
      {book.image ? (
        <Image
          className="w-auto h-auto"
          src={book.image}
          alt={book.title}
          width={width}
          height={height}
          style={{ objectFit: 'contain' }}
          priority
        />
      ) : (
        <div className="w-[140px] h-[200px] bg-gray-200 flex items-center justify-center">
          No Image
        </div>
      )}
      <ul className="list-noe text-white text-center">
        <li className="my-1 text-cyan-500">{book.title}</li>
        <li className="my-1">{book.author}&ensp;著</li>
        <li className="my-1">{book.publisher}&ensp;刊</li>
        <li className="my-1">{book.published}&ensp;発売</li>
      </ul>
    </div>
  )
}
