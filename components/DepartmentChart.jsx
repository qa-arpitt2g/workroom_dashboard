'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import styles from './DepartmentChart.module.css';

export default function DepartmentChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>Hours Spent by Department</h3>
        <button className={styles.reportButton}>View report</button>
      </div>

      <div className={styles.content}>
        <div className={styles.chartSection}>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }}
                  itemStyle={{ color: 'var(--text-main)', fontWeight: 500 }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className={styles.centerLabel}>
              <span className={styles.centerValue}>342h</span>
              <span className={styles.centerValueSmall}>45m</span>
            </div>
          </div>
          
          <div className={styles.legend}>
            {data.map((item, index) => (
              <div key={index} className={styles.legendItem}>
                <div className={styles.dot} style={{ backgroundColor: item.color }}></div>
                <div className={styles.legendInfo}>
                  <div className={styles.legendName}>{item.name}</div>
                  <div className={styles.legendDetails}>
                    <span className={styles.legendHours}>{item.hours}</span>
                    <span className={styles.legendPercent}>({item.value}%)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.insightCard}>
          <TrendingUp size={16} className={styles.insightIcon} />
          <p className={styles.insightText}>
            Engineering Department is leading with 42% of total hours.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
