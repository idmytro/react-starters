import MdContent from '../markdown/md.mdx'
import LikeButton from './like-button'

/* https://nextjs.org/docs/app/building-your-application/configuring/mdx */

function Header({ title }) {
  return <h1>{title || 'Default title'}</h1>
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <MdContent />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <LikeButton />
    </div>
  )
}
