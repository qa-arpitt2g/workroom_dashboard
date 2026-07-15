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

  // Sparkline path generation
  const min = Math.min(...data.chartData);
  const max = Math.max(...data.chartData);
  const range = max - min || 1;
  const width = 110;
  const height = 35;
  const step = width / (data.chartData.length - 1);

  const points = data.chartData.map((val, index) => {
    const x = index * step;
    const y = height - ((val - min) / range) * (height - 4) - 2;
    return { x, y };
  });

  // Create smooth bezier curve
  const pathData = points.map((pt, i) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = points[i - 1];
    const cpx = (prev.x + pt.x) / 2;
    return `C ${cpx} ${prev.y} ${cpx} ${pt.y} ${pt.x} ${pt.y}`;
  }).join(' ');

  // Parse trend to show arrow + percent + label
  const trendUp = data.trend.includes('↑');
  const trendPct = data.trend.replace('↑', '').replace('↓', '').trim();

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
    >
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.value}>{data.value}</div>
        </div>
        <div className={styles.iconWrapper} style={{ color: data.accent, backgroundColor: `${data.accent}18` }}>
          <Icon size={22} />
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.trendInfo}>
          <span className={`${styles.trend} ${styles[data.trendColor]}`}>
            {trendUp ? '↑' : '↓'} {trendPct}
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
