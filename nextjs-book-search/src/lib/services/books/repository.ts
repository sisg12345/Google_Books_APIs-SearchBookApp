import prisma from '@/lib/prisma'

/**
 * 全レビュー取得
 * @returns 全レビュー
 */
export async function findAllReviews() {
  return await prisma.reviews.findMany({ orderBy: { createdAt: 'desc' } })
}

/**
 * レビュー情報取得
 * @param id 書籍id
 * @returns レビュー情報
 */
export async function findReviewById(id: string) {
  return await prisma.reviews.findUnique({ where: { id } })
}
