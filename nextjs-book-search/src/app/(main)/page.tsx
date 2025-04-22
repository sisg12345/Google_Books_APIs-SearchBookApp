import { use } from 'react'
import LinedBookDetails from '@/components/organisms/books/LinkedBookDetails'
import { searchAllReviews } from '@/lib/services/books/api'
import type { Book } from '@/types/book/type'

// 常に最新情報を所得するための設定
export const dynamic = 'force-dynamic'

/**
 * ホームページ
 */
export default function HomePage() {
  // すべてのレビュー情報を取得
  const reviews: Book[] = use(searchAllReviews())

  return (
    <main>
      <LinedBookDetails books={reviews} />
    </main>
  )
}
