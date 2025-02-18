import React, { FC } from 'react'
import { TextType } from './text.props'
import styles from "./text.module.css"

const Text: FC<TextType> = ({ text }) => {
  return (
    <p className={styles.text}>{text}</p>
  )
}

export default Text