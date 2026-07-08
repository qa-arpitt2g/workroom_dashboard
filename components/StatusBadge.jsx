import React from 'react';
import styles from './StatusBadge.module.css';

export default function StatusBadge({ status }) {
  const statusLower = status.toLowerCase().replace(' ', '-');
  
  return (
    <div className={`${styles.badge} ${styles[statusLower]}`}>
      {status}
    </div>
  );
}
