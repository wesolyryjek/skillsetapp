import React, { PropTypes } from 'react';
import styles from './styles.css';

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={styles.button}>
      {children}
   </button>

  );
}
Button.propTypes ={
  children: PropTypes.node,
  onClick: PropTypes.func,
}
