import { PropsWithChildren } from 'react'

interface ButtonProps {
  className?: string
  type?: 'button' | 'submit' | 'reset'
  color: 'primary' | 'danger'
  width?: number
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * ボタン
 */
export default function Button({
  className,
  type = 'button',
  color,
  width = 100,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) {
  // ボタンカラーaa
  let btnColor: string

  switch (color) {
    case 'primary':
      btnColor = 'from-cyan-500 to-blue-500 dark:focus:ring-cyan-800 focus:ring-cyan-300'
      break
    case 'danger':
      btnColor = 'from-pink-500 to-orange-400 focus:ring-pink-200 dark:focus:ring-pink-800'
      break
  }

  let btnWidth: string

  switch (width) {
    case 100:
      btnWidth = 'w-[100px]'
      break
    case 200:
      btnWidth = 'w-[200px]'
      break
    case 300:
      btnWidth = 'w-[300px]'
      break
    case 400:
      btnWidth = 'w-[400px]'
      break
    case 500:
      btnWidth = 'w-[500px]'
      break
    default:
      btnWidth = ''
  }

  // ボタンに適応するclass
  const btnClassName = className + ' ' + btnColor + ' ' + btnWidth

  return (
    <button
      type={type}
      className={`text-white bg-gradient-to-r hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center ${btnClassName}`}
      onClick={(event) => {
        onClick?.(event)
      }}
    >
      {children}
    </button>
  )
}
