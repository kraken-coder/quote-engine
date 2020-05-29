import React, { lazy } from 'react'

const Analytics = lazy(() => import('../views/analytics'))

const Customers = lazy(() => import('../views/customers'))

const Dashboard = lazy(() => import('../views/Dashboard/'))

const Leads = lazy(() => import('../views/leads'))

const Profile = lazy(() => import('../views/profile'))

const Quotes = lazy(() => import('../views/quotes'))

const Settings = lazy(() => import('../views/settings'))

// icons

import {
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
