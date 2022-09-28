/* eslint-disable react/no-children-prop */
import React from 'react'
import Button from '../UI/Button/Button'
import styles from './Header.module.scss'


const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Button style={{color: '#a3daa5', border: '1px solid rgba(163,218,165, .5)'}} children="Создать резюме" />
      <Button style={{color: '#fff', border: '1px solid hsla(0,0%,100%,.5)'}} children='Войти' />
    </div>
  )
}

export default Header
