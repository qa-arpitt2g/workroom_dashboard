'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts';
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

      <div className={styles.chartContainer} style={{ width: '100%', height: '260px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
            <defs>
              <linearGradient id="colorProgressArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.02}/>
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
              opacity={0.8}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                fontSize: '0.8rem'
              }}
              itemStyle={{ color: '#3B82F6', fontWeight: 500 }}
              formatter={(value) => [`${value}%`, 'Progress']}
            />
            <Area
              type="monotone"
              dataKey="progress"
              stroke="#3B82F6"
              strokeWidth={2.5}
              fill="url(#colorProgressArea)"
              dot={{ r: 5, strokeWidth: 2, fill: '#FFFFFF', stroke: '#3B82F6' }}
              activeDot={{ r: 7, fill: '#3B82F6', strokeWidth: 0 }}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
