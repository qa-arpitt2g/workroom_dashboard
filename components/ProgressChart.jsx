'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ProgressChart.module.css';

export default function ProgressChart({ data }) {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>Progress Trend</h3>
        <button className={styles.filterButton}>
          Last 6 Weeks <ChevronDown size={14} />
        </button>
      </div>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary-light)" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="var(--primary-light)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" opacity={0.5} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} 
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}
              itemStyle={{ color: 'var(--primary)' }}
            />
            <Line 
              type="monotone" 
              dataKey="progress" 
              stroke="var(--primary-light)" 
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: 'var(--card-bg)', stroke: 'var(--primary)' }}
              activeDot={{ r: 6, fill: 'var(--primary)' }}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
