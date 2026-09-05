import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">Engr. Danladi Abdu</Link>
        <nav className="space-x-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  )
}
