import Analytics from '../views/analytics'
import Customers from '../views/customers'
import Dashboard from '../views/Dashboard/'
import Leads from '../views/leads'
import Profile from '../views/profile'
import Quotes from '../views/quotes'
import Settings from '../views/settings'

// icons

import {
  searchIcon,
  profileIcon,
  settingsIcon,
  leadsIcon,
  dashboardIcon,
  analyticsIcon,
  customerIcon,
  quoteIcon,
} from './icons'

export const overviewRoutes = [
  {
    name: '/dashboard',
    title: 'Dashboard',
    path: '/admin',
    icon: dashboardIcon,
    component: Dashboard,
  },
  {
    name: '/analytics',
    title: 'Analytics',
    icon: analyticsIcon,
    path: '/admin',
    component: Analytics,
  },
]

export const manageRoutes = [
  {
    name: '/leads',
    title: 'Leads',
    icon: leadsIcon,
    path: '/admin',
    component: Leads,
  },
  {
    name: '/quotes',
    title: 'Quotes',
    icon: quoteIcon,
    path: '/admin',
    component: Quotes,
  },
  {
    name: '/customers',
    title: 'Customer',
    icon: customerIcon,
    path: '/admin',
    component: Customers,
  },
]

export const accountRoutes = [
  {
    name: '/profile',
    title: 'Profile',
    icon: profileIcon,
    path: '/admin',
    component: Profile,
  },
  {
    name: '/settings',
    title: 'Settings',
    icon: settingsIcon,
    path: '/admin',
    component: Settings,
  },
]

export const routes = [
  {
    name: '/profile',
    title: 'Profile',
    icon: profileIcon,
    path: '/admin',
    component: Profile,
  },
  {
    name: '/settings',
    title: 'Settings',
    icon: settingsIcon,
    path: '/admin',
    component: Settings,
  },
  {
    name: '/leads',
    title: 'Leads',
    icon: leadsIcon,
    path: '/admin',
    component: Leads,
  },
  {
    name: '/quotes',
    title: 'Quotes',
    icon: quoteIcon,
    path: '/admin',
    component: Quotes,
  },
  {
    name: '/customers',
    title: 'Customer',
    icon: customerIcon,
    path: '/admin',
    component: Customers,
  },
  {
    name: '/dashboard',
    title: 'Dashboard',
    path: '/admin',
    icon: dashboardIcon,
    component: Dashboard,
  },
  {
    name: '/analytics',
    title: 'Analytics',
    icon: analyticsIcon,
    path: '/admin',
    component: Analytics,
  },
]
