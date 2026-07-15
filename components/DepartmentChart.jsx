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
      {/* Header — title only, no View report */}
      <div className={styles.header}>
        <h3 className={styles.title}>Hours Spent by Dept</h3>
      </div>

      {/* Donut chart centered */}
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={88}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
              startAngle={90}
              endAngle={-270}
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

        {/* Center label */}
        <div className={styles.centerLabel}>
          <span className={styles.centerValue}>342h</span>
          <span className={styles.centerSub}>45m</span>
        </div>
      </div>

      {/* Legend — 2 column grid */}
      <div className={styles.legend}>
        {data.map((item, index) => (
          <div key={index} className={styles.legendItem}>
            <span className={styles.dot} style={{ backgroundColor: item.color }} />
            <div className={styles.legendInfo}>
              <span className={styles.legendName}>{item.name}</span>
              <span className={styles.legendMeta}>
                {item.hours}&nbsp;<span className={styles.legendPercent}>({item.value}%)</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Insight strip */}
      <div className={styles.insightCard}>
        <TrendingUp size={15} className={styles.insightIcon} />
        <p className={styles.insightText}>
          Engineering Department is leading with 42% of total hours.
        </p>
      </div>
    </motion.div>
  );
}
