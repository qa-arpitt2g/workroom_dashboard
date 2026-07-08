'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MoreVertical, Play, FileText, Settings, Layout, Users, Box } from 'lucide-react';
import StatusBadge from './StatusBadge';
import styles from './TaskTable.module.css';

const getIcon = (department) => {
  switch(department) {
    case 'Design': return <Layout size={18} />;
    case 'Engineering': return <Settings size={18} />;
    case 'Product': return <Box size={18} />;
    case 'Marketing': return <Users size={18} />;
    default: return <FileText size={18} />;
  }
};

const getIconColor = (department) => {
  switch(department) {
    case 'Design': return '#F59E0B';
    case 'Engineering': return '#22C55E';
    case 'Product': return '#3B82F6';
    case 'Marketing': return '#8B5CF6';
    default: return '#9CA3AF';
  }
};

export default function TaskTable({ tasks }) {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>Recent Tasks</h3>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.activeTab}`}>All</button>
          <button className={styles.tab}>In Progress</button>
          <button className={styles.tab}>Completed</button>
          <button className={styles.tab}>On Hold</button>
        </div>
        <button className={styles.viewAll}>View all</button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tbody>
            {tasks.map((task) => (
              <motion.tr 
                key={task.id} 
                className={styles.row}
                whileHover={{ backgroundColor: 'var(--hover-bg)' }}
              >
                <td className={styles.taskCell}>
                  <div className={styles.taskIconWrapper} style={{ color: getIconColor(task.department), backgroundColor: `${getIconColor(task.department)}15` }}>
                    {getIcon(task.department)}
                  </div>
                  <div className={styles.taskInfo}>
                    <div className={styles.taskName}>{task.name}</div>
                    <div className={styles.taskMeta}>
                      {task.department} <span className={styles.dot}>•</span> {task.team}
                    </div>
                  </div>
                </td>
                
                <td className={styles.statusCell}>
                  <StatusBadge status={task.status} />
                </td>

                <td className={styles.hoursCell}>
                  <div className={styles.hoursValue}>{task.hours}</div>
                  <div className={styles.hoursLabel}>Hours Spent</div>
                </td>

                <td className={styles.actionCell}>
                  <button className={styles.playButton}>
                    <Play size={14} fill="currentColor" />
                  </button>
                  <button className={styles.moreButton}>
                    <MoreVertical size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className={styles.footer}>
        <button className={styles.footerLink}>View all tasks</button>
      </div>
    </motion.div>
  );
}
