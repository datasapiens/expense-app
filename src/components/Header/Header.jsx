import { Link } from 'react-router-dom'

import s from './Header.module.scss'

const NAVIGATION = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Graph',
    href: '/graph',
  },
]

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={s.container}>
          {NAVIGATION.map((i, index) => (
            <li key={index}>
              <Link to={i.href}>{i.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
