import Link from 'next/link'

/**
 * 404 Not Found ページ
 */
export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center h-screen text-pink-300 font-bold text-2xl">
      <h2>ページが見つかりません</h2>
      <p>お探しのページは存在しないか、削除された可能性があります。</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-400">
        トップページに戻る
      </Link>
    </main>
  )
}
