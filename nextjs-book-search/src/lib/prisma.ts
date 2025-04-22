import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient({
    // ログレベル
    log: ['query', 'error', 'info', 'warn'],
  })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

// ホットリロードによるPrismaClientの再生成を防ぐための処理
// global.prisma上にPrismaクライアントが存在すれば再利用、しない場合は新規作成
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// 非Production環境ではglobal.prismaにオブジェクトを格納
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

export default prisma
