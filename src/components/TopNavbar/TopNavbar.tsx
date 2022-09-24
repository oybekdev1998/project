import React from 'react'
import { Link } from 'react-router-dom'

import { navbarRouter } from '@/helpers/navbarRouter'
import styles from './TopNavbar.module.scss'

const TopNavbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__items} >
        {
          navbarRouter?.map(({url, name}) => {
            return (
              <li key={url} className={styles.navbar__item}><Link to={url}>{name}</Link></li>
            ) 
          })
        }
      </ul>
    </div>
  )
}

export default TopNavbar