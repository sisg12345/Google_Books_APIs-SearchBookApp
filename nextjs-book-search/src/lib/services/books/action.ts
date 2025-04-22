'use server'

import { redirect } from 'next/navigation'
import { searchBookById } from './api'
import prisma from '@/lib/prisma'

/**
 * レビュー情報を登録
 * @param id 書籍id
 * @param memo 感想
 */
export async function addReview(id: string, memo: string | undefined): Promise<void> {
  // 書籍情報を取得
  const book = await searchBookById(id)
  // 登録する書籍情報
  const input = {
    title: book.title,
    author: book.author,
    publisher: book.publisher,
    published: book.published,
    imageUrl: book.image,
    memo: memo ?? '',
  }

  // データが存在すれば更新、存在しなければ登録
  await prisma.reviews.upsert({
    update: input,
    create: Object.assign({}, input, { id }),
    where: {
      id,
    },
  })

  // 処理成功後はトップページに遷移
  redirect('/')
}

/**
 * レビュー情報を削除
 * @param id 書籍id
 */
export async function removeReview(id: string): Promise<void> {
  // 書籍情報を削除
  await prisma.reviews.delete({
    where: {
      id,
    },
  })

  // 処理成功後はトップページに遷移
  redirect('/')
}
