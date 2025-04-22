'use client'

import { startTransition, useState } from 'react'
import Button from '@/components/atoms/button/Button'
import { addReview, removeReview } from '@/lib/services/books/action'

type EditFormProps = {
  src: {
    id: string
    memo?: string
    updateDate?: string
  }
}

/**
 * 編集フォーム
 */
export default function EditForm({ src }: EditFormProps) {
  // 書籍idのstate
  const [id] = useState<string>(src.id)
  // 更新日付
  const [updateDate] = useState<string | undefined>(src.updateDate)
  // 感想のstate
  const [memo, setMemo] = useState<string | undefined>(src.memo)

  return (
    <form className="text-black">
      <div className="my-2">
        <label className="text-white font-bold" htmlFor="memo">
          コメント
        </label>
        <textarea
          id="memo"
          name="memo"
          rows={10}
          className="block bg-gray-100 border-2 border-sky-600 w-full rounded focus:bg-white focus:outline-none focus:border-sky-500"
          value={memo}
          onChange={(e) => {
            setMemo(e.target.value)
          }}
        ></textarea>
      </div>
      <div className="my-2 text-white font-bold">更新日: {updateDate}</div>
      <div className="flex justify-between text-right">
        <Button
          color="danger"
          onClick={() => {
            startTransition(() => {
              removeReview(id)
            })
          }}
        >
          削除
        </Button>
        <Button
          color="primary"
          onClick={() => {
            startTransition(() => {
              addReview(id, memo)
            })
          }}
        >
          登録
        </Button>
      </div>
    </form>
  )
}
