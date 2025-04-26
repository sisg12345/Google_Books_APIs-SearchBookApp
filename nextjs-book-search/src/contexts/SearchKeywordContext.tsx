'use client'

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react'

// 書籍検索キーワードのコンテキスト
const SearchKeywordContext = createContext<string>('')

// 書籍検索キーワードのアクションのコンテキスト
const SearchKeywordActionsContext = createContext<Dispatch<SetStateAction<string>>>(() => {})

/**
 * 書籍検索キーワードのプロバイダー
 */
export function SearchKeywordProvider({ children }: PropsWithChildren) {
  const [keyword, setKeyword] = useState<string>('')

  return (
    <SearchKeywordContext value={keyword}>
      <SearchKeywordActionsContext value={setKeyword}>{children}</SearchKeywordActionsContext>
    </SearchKeywordContext>
  )
}

/// 書籍検索キーワードのコンテキストを取得するフック
export const useSearchKeywordContext = () => useContext<string>(SearchKeywordContext)

/// 書籍検索キーワードのアクションのコンテキストを取得するフック
export const useSearchKeywordActionsContext = () =>
  useContext<Dispatch<SetStateAction<string>>>(SearchKeywordActionsContext)
