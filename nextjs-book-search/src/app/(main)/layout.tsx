'use client'

import { PropsWithChildren } from 'react'
import PageLoading from '@/components/pages/LoadingPage'
import { useSpinnerContext } from '@/contexts/useSpinnerContext'

export default function MainLayout({ children }: PropsWithChildren) {
  // スピナーの状態を取得
  const isLoading = useSpinnerContext()

  return (
    <>
      {children}
      {isLoading && <PageLoading />}
    </>
  )
}
