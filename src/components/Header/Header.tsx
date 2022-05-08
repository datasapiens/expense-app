import { Link } from 'react-router-dom'

import s from './Header.module.scss'

interface Navigation {
  label: string
  href: string
}

const NAVIGATION: Navigation[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Graph',
    href: '/graph',
  },
]

const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul className={s.container}>
          {NAVIGATION.map((i, index) => (
            <li key={index}>
              <Link to={i.href} className={s.navigation}>
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
