import { use } from 'react'
import BookDetail from './BookDetail'
import EditForm from './EditForm'
import { searchBookById, searchReviewById } from '@/lib/services/books/api'

type EditBookPageProps = {
  params: Promise<{ id: string }>
}

/**
 * 書籍編集ページ
 */
export default function EditBookPage({ params }: EditBookPageProps) {
  const { id } = use(params)
  const [book, review] = use(
    Promise.all([
      // 書籍情報を取得
      searchBookById(id),
      // レビュー情報を取得
      searchReviewById(id),
    ]),
  )

  return (
    <main className="p-4 rounded-xl border-4 border-sky-300 bg-gray-800 hover:border-pink-300 max-w-[1000px] mx-auto">
      <BookDetail book={book} />
      <hr />
      <EditForm src={{ id, memo: review?.memo, updateDate: review?.updatedAt }} />
    </main>
  )
}
