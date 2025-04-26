'use client'

import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'
import SearchForm from '@/components/organisms/form/SearchForm'
import { useSearchKeywordContext } from '@/contexts/SearchKeywordContext'

export default function MainTemplate({ children }: PropsWithChildren) {
  const router = useRouter()
  // 検索済みキーワード取得
  const keyword = useSearchKeywordContext()
  // 検索ずみキーワード
  let searchedKeyword = ''

  const pathName = usePathname()
  // URLパスが本検索ぺーじの場合は、検索済みキーワードをセットする
  if (pathName.match(/search-books/)) {
    searchedKeyword = keyword
  }

  /**
   * 検索
   * page.tsxに検索処理を依頼する
   */
  const onSearch = (keyword: string = ''): void => {
    if (keyword?.trim() !== '') {
      // 検索キーワードをエンコードしてURLに渡す
      router.push(`/search-books/${encodeURIComponent(keyword)}`)
    }
  }

  return (
    <>
      <div className="mt-2 mb-4 mx-2">
        <SearchForm
          placeholder="Google Books APIs ..."
          searchedKeyword={searchedKeyword}
          onSearch={onSearch}
        />
      </div>
      <div className="m-5">{children}</div>
    </>
  )
}
