'use client'

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

// スピナーのコンテキスト
const SpinnerContext = createContext<boolean>(false)

// スピナーのアクションのコンテキスト
const SpinnerActionsContext = createContext<Dispatch<SetStateAction<boolean>>>(() => {})

/**
 * スピナーのプロバイダー
 */
export function SpinnerProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <SpinnerContext value={isLoading}>
      <SpinnerActionsContext value={setIsLoading}>{children}</SpinnerActionsContext>
    </SpinnerContext>
  )
}

/// スピナーのコンテキストを取得するフック
export const useSpinnerContext = () => useContext<boolean>(SpinnerContext)

/// スピナーのアクションのコンテキストを取得するフック
export const useSpinnerActionsContext = () =>
  useContext<Dispatch<SetStateAction<boolean>>>(SpinnerActionsContext)
