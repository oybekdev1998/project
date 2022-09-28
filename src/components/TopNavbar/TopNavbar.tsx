import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navbarRouter } from '@/helpers/navbarRouter'
import classNames from 'classnames'
import styles from './TopNavbar.module.scss'


const TopNavbar: React.FC = () => {
  
  const [changeColor, setChangeColor] = useState<Boolean>(false)

  const clickHandler = (id: any):void => {
    console.log(id)
    setChangeColor(true)
  }
  
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const classnames = classNames([styles.navbar__item, changeColor ? styles.active: ' '].join(' '))
  return (
    <div className={styles.navbar}>
      <div className='container'>
      <ul className={styles.navbar__items} >
        {
          navbarRouter?.map(({url, name}) => {
            return (
              <li key={url} onClick={(id) => clickHandler(id)} className={classnames}><Link to={url}>{name}</Link></li>
            ) 
          })
        }
      </ul>
      </div>
    </div>
  )
}

export default TopNavbar