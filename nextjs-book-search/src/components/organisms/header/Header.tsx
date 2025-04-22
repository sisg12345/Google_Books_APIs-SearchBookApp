import Link from 'next/link'

type HeaderProps = {
  title: string
  nvaItems: {
    label: string
    href: string
  }[]
}

/**
 * ヘッダー
 */
export default function Header({ nvaItems }: HeaderProps) {
  return (
    <header className="sticky top-0 backdrop-blur-lg border-b border-sky-300">
      <nav>
        <ul className="flex">
          {nvaItems.map(({ label, href }) => (
            <li className="block py-2 m-2 " key={label}>
              <Link className="px-2 py-2 font-bold text-cyan-500 hover:text-pink-300" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
