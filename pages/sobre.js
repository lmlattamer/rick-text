import Link from 'next/link'

export default function Sobre(){
  return (
    <div>
      <h1>Olá Clique logo abaixo</h1>

      <Link href='/'>
        <a>Vá para home</a>
      </Link>
    </div>
  )
}