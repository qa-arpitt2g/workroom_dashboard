import React from 'react';
import { Bell, ChevronDown, Calendar, Users, Building2 } from 'lucide-react';
import styles from './TopHeader.module.css';

export default function TopHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>Overview</h1>
        <p className={styles.subtitle}>Track task progress and team performance</p>
      </div>

      <div className={styles.right}>
        <div className={styles.filters}>
          <button className={styles.filterButton}>
            <Building2 size={16} className={styles.icon} />
            <span>All Departments</span>
            <ChevronDown size={14} className={styles.chevron} />
          </button>
          
          <button className={styles.filterButton}>
            <Users size={16} className={styles.icon} />
            <span>All Teams</span>
            <ChevronDown size={14} className={styles.chevron} />
          </button>
          
          <button className={styles.filterButton}>
            <Calendar size={16} className={styles.icon} />
            <span>May 14 - May 21, 2024</span>
            <ChevronDown size={14} className={styles.chevron} />
          </button>
        </div>

        <div className={styles.actions}>
          <button className={styles.notificationButton}>
            <Bell size={20} />
            <span className={styles.badge}>4</span>
          </button>
        </div>
      </div>
    </header>
  );
}
