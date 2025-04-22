'use client'

import Link from 'next/link'

export default function Error() {
  return (
    <main className="flex flex-col justify-center items-center h-screen text-pink-300">
      <h2 className="text-2xl font-bold">エラーが発生しました</h2>
      <p className="text-2xl font-bold">
        ご迷惑をおかけして申し訳ございません
        <br />
        時間をおいて再度アクセスしてください
      </p>
      <Link href="/" className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-400">
        トップページに戻る
      </Link>
    </main>
  )
}
