/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

interface Props {
  children: string,
  style?: React.CSSProperties | undefined
  link: React.AnchorHTMLAttributes | undefined
}
const Button = ({children, style, link }: Props) => {
  <Link to={link}>
    <button type='button' style={style} className={styles.button}>{children}</button>
  </Link>
}

export default Button