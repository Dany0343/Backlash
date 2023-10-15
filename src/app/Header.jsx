import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <ul className="w-full flex flex-row justify-center items-center gap-20">
        <Link href="/user">Upload</Link>
        <Link href="/" className='text-5xl font-bold glitch' data-glitch='Backlash'>Backlash</Link>
        <Link href="/community">Community</Link>
      </ul>
    </header>
  );
}
