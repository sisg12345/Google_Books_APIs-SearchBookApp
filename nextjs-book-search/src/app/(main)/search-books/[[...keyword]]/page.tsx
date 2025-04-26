'use client'

import { use, useEffect, useState } from 'react'
import Button from '@/components/atoms/button/Button'
import LinedBookDetails from '@/components/organisms/books/LinkedBookDetails'
import { useSearchKeywordActionsContext } from '@/contexts/SearchKeywordContext'
import { useSpinnerActionsContext, useSpinnerContext } from '@/contexts/SpinnerContext'
import { searchBooksByKeyword } from '@/lib/services/books/api'
import type { Book } from '@/types/book/type'

// ページあたの表示件数
const PER_PAGE = 20

type SearchBooksProps = {
  params: Promise<{ keyword: string | undefined }>
}

/**
 * 書籍検索ページ
 */
export default function SearchBooksPage({ params }: SearchBooksProps) {
  // スピナーの状態を取得
  const isLoading = useSpinnerContext()
  // スピナーの状態のセッター
  const setLoading = useSpinnerActionsContext()
  // 検索済みキーワードの状態のセッター
  const setSearchedKeyword = useSearchKeywordActionsContext()
  // 検索キーワード
  const { keyword = '' } = use(params)
  // 検索開始位置のstate
  const [startIndex, setStartIndex] = useState(0)
  // 書籍情報のstate
  const [books, setBooks] = useState<Book[]>([])
  // エラー状態のstate
  const [error, setError] = useState<Error | null>(null)

  /**
   * 次のページの書籍情報を取得
   */
  const onSearchNextPage = async (index: number) => {
    if (startIndex === 0 && index < 0) {
      return
    }

    try {
      setLoading(true)

      // 検索開始位置を更新
      setStartIndex((prevIndex) => prevIndex + index)
      // 書籍情報を取得
      const result = await searchBooksByKeyword(keyword, startIndex + index)
      if (result.length > 0) {
        setBooks(result)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      try {
        // 検索キーワードをデコードしてセット
        setSearchedKeyword(decodeURIComponent(keyword))
        // 書籍情報を取得
        const books = await searchBooksByKeyword(keyword, startIndex)
        // 書籍情報をセット
        setBooks(books)
      } catch (error) {
        setError(error as Error)
        throw error
      } finally {
        setLoading(false)
      }
    })()

    // 非同期通信の例外をスロー
    if (error) {
      throw error
    }

    return () => {
      setLoading(false)
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [keyword, error])

  return (
    <>
      {!isLoading && (
        <>
          <LinedBookDetails books={books} />
          {books.length > 0 && (
            <div className="flex justify-center gap-4 mt-4 mb-4">
              <Button color="primary" onClick={() => onSearchNextPage(-PER_PAGE)}>
                前
              </Button>
              <Button color="primary" onClick={() => onSearchNextPage(PER_PAGE)}>
                次
              </Button>
            </div>
          )}
        </>
      )}
    </>
  )
}
