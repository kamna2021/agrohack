import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/add',
    component: lazy(() => import('../../views/Add'))
  },
  {
    path: '/detail:id',
    component: lazy(() => import('../../views/Detail'))
  },
  {
    path: '/org',
    component: lazy(() => import('../../views/Org'))
  },
  {
    path: '/orgDetail',
    component: lazy(() => import('../../views/OrgDetail'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout'
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
