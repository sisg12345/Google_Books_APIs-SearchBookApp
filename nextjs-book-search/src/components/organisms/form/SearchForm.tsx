'use client'

import { HTMLAttributes, useEffect, useState } from 'react'
import Button from '@/components/atoms/button/Button'

interface SearchFormProps extends HTMLAttributes<HTMLElement> {
  /** 検索済みワード */
  searchedKeyword?: string
  /** プレースホルダー */
  placeholder?: string
  /** 検索イベント */
  onSearch: (keyword: string | undefined) => void
}

/**
 * 検索フォーム
 */
export default function SearchForm({
  searchedKeyword,
  placeholder,
  onSearch,
  className,
  ...props
}: SearchFormProps) {
  // 検索キーワード
  const [keyword, setKeyword] = useState<string>('')

  useEffect(() => {
    // 検索済みワードがある場合は、キーワードを更新する
    if (searchedKeyword) {
      setKeyword(searchedKeyword)
    }
  }, [searchedKeyword])

  return (
    <form
      className={`flex ${className}`}
      onSubmit={(e) => {
        // デフォルトのフォーム送信動作を防ぐ
        e.preventDefault()
        onSearch(keyword)
      }}
      {...props}
    >
      <input
        type="text"
        className="px-2 py-2 w-full bg-gray-100 text-black border border-gray-600 rounded focus:bg-white focus:outline-none focus:border-sky-500"
        placeholder={placeholder}
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value)
        }}
      />
      <Button type="submit" color="primary" className="whitespace-nowrap mx-1">
        検索
      </Button>
    </form>
  )
}
