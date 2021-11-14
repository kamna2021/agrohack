import { Mail, Home } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Главная',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'add',
    title: 'Новая запись',
    icon: <Mail size={20} />,
    navLink: '/add'
  },
  {
    id: 'Org',
    title: 'Организации',
    icon: <Mail size={20} />,
    navLink: '/org'
  }
]
