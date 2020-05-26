import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faAlignCenter,
  faChartPie,
  faLocationArrow,
  faCommentDots,
  faUsers,
  faUser,
  faCog,
  faBell,
} from '@fortawesome/free-solid-svg-icons'

export const searchIcon = <FontAwesomeIcon size="sm" icon={faSearch} />
export const dashboardIcon = <FontAwesomeIcon size="sm" icon={faAlignCenter} />
export const analyticsIcon = <FontAwesomeIcon size="sm" icon={faChartPie} />
export const leadsIcon = <FontAwesomeIcon size="sm" icon={faLocationArrow} />
export const quoteIcon = <FontAwesomeIcon size="sm" icon={faCommentDots} />
export const customerIcon = <FontAwesomeIcon size="sm" icon={faUsers} />
export const profileIcon = <FontAwesomeIcon size="sm" icon={faUser} />
export const settingsIcon = <FontAwesomeIcon size="sm" icon={faCog} />

// exports with props

export const leadIconWithProps = prop => (
  <FontAwesomeIcon size={prop} icon={faLocationArrow} />
)

export const quoteIconWithProp = prop => (
  <FontAwesomeIcon size={prop} icon={faCommentDots} />
)

export const customerIconWithProp = prop => (
  <FontAwesomeIcon size={prop} icon={faUsers} />
)

export const notifyIconWithProps = prop => (
  <FontAwesomeIcon size={prop} icon={faBell} />
)

export const settingsIconWithProps = prop => (
  <FontAwesomeIcon size={prop} icon={faCog} />
)

export const iconWithProp = prop => <FontAwesomeIcon size={prop} icon={faSearch} />
