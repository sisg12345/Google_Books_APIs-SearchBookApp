import './globals.css'
// Googleフォント
import { Inconsolata } from 'next/font/google'
import { PropsWithChildren } from 'react'
import Header from '@/components/organisms/header/Header'
import { SearchKeywordProvider } from '@/contexts/useSearchKeywordContext'
import { SpinnerProvider } from '@/contexts/useSpinnerContext'

// フォント
const font = Inconsolata({ subsets: ['latin'] })

// メタデータの設定
export const metadata = {
  title: '気になるあの本！',
  description: '自分が気になった本を残すためのアプリ',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body
        // フォントを設定
        className={font.className}
      >
        <Header title="気になるあの本！" nvaItems={[{ label: 'ホーム', href: '/' }]} />
        <SpinnerProvider>
          <SearchKeywordProvider>{children}</SearchKeywordProvider>
        </SpinnerProvider>
      </body>
    </html>
  )
}
