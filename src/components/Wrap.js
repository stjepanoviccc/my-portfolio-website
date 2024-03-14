import React from 'react'
import styles from "../scss/components/Wrap.module.scss";

const Wrap = ({children, extendClassName}) => {
  return (
    <div className={styles.wrap + " " + extendClassName}>
      {children}
    </div>
  )
}

export default Wrap
