import Link from 'next/link'

export default function Home(){
  return (
    <div>
      <h1>Olá Clique logo abaixo</h1>

      <Link href='/sobre'>
        <a>Vá para home</a>
      </Link>
    </div>
  )
}