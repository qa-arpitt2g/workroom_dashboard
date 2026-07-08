'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, CheckSquare, Clock } from 'lucide-react';
import styles from './KPICard.module.css';

const iconMap = {
  ClipboardList,
  CheckSquare,
  Clock
};

export default function KPICard({ data, delay }) {
  const Icon = iconMap[data.icon] || Clock;

  // Simple sparkline path generation
  const min = Math.min(...data.chartData);
  const max = Math.max(...data.chartData);
  const range = max - min || 1;
  const width = 120;
  const height = 30;
  const step = width / (data.chartData.length - 1);
  
  const pathData = data.chartData.map((val, index) => {
    const x = index * step;
    const y = height - ((val - min) / range) * height;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  // Smooth curve logic
  const smoothPath = pathData.replace(/L/g, 'S'); // basic smoothing approximation, or just stick to L for sparkline
  // For a better look, let's use a standard bezier approximation if needed, but linear is fine for small sparklines, let's just make it look smooth by styling.

  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)' }}
    >
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.value}>{data.value}</div>
        </div>
        <div className={styles.iconWrapper} style={{ color: data.accent, backgroundColor: `${data.accent}15` }}>
          <Icon size={24} />
        </div>
      </div>
      
      <div className={styles.footer}>
        <div className={styles.trendInfo}>
          <span className={`${styles.trend} ${styles[data.trendColor]}`}>
            {data.trend}
          </span>
          <span className={styles.trendLabel}>{data.trendLabel}</span>
        </div>
        <div className={styles.chartWrapper}>
          <svg width={width} height={height} className={styles.sparkline}>
            <motion.path
              d={pathData}
              fill="none"
              stroke={data.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
