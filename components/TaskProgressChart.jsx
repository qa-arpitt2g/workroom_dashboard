'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './TaskProgressChart.module.css';

export default function TaskProgressChart({ data }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>Task Progress</h3>
        <button className={styles.filterButton}>
          This Week <ChevronDown size={14} />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={58}
                outerRadius={82}
                paddingAngle={2}
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
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontSize: '0.8rem' }}
                itemStyle={{ color: '#111827', fontWeight: 500 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className={styles.centerLabel}>
            <span className={styles.centerValue}>{data[0].value}%</span>
            <span className={styles.centerText}>Overall Progress</span>
          </div>
        </div>

        <div className={styles.legend}>
          {data.map((item, index) => (
            <div key={index} className={styles.legendItem}>
              <div className={styles.legendLeft}>
                <div className={styles.dot} style={{ backgroundColor: item.color }}></div>
                <span className={styles.legendName}>{item.name}</span>
              </div>
              <div className={styles.legendRight}>
                <span className={styles.legendCount}>{item.count}</span>
                <span className={styles.legendPercent}>({item.value}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
