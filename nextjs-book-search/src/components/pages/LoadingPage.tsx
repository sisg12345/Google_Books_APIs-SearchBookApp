/**
 * ローディングページ
 */
export default function PageLoading() {
  return (
    <div className="flex justify-center" aria-label="Now Loading...">
      <div className="animate-spin h-20 w-20 mt-5 border-8 border-sky-500 rounded-full border-b-transparent"></div>
    </div>
  )
}
