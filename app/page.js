import React from 'react';
import Layout from '../components/Layout';
import TopHeader from '../components/TopHeader';
import KPICard from '../components/KPICard';
import TaskProgressChart from '../components/TaskProgressChart';
import ProgressChart from '../components/ProgressChart';
import DepartmentChart from '../components/DepartmentChart';
import TaskTable from '../components/TaskTable';
import { dashboardData } from '../data/dashboardData';
import styles from './page.module.css';

export default function Dashboard() {
  return (
    <Layout>
      <div className={styles.dashboard}>
        <TopHeader />
        
        <div className={styles.kpiGrid}>
          {dashboardData.stats.map((stat, index) => (
            <KPICard key={stat.id} data={stat} delay={index * 0.1} />
          ))}
        </div>
        
        <div className={styles.chartGrid}>
          <div className={styles.progressDonut}>
            <TaskProgressChart data={dashboardData.progress} />
          </div>
          <div className={styles.progressLine}>
            <ProgressChart data={dashboardData.trendData} />
          </div>
        </div>
        
        <div className={styles.bottomGrid}>
          <div className={styles.taskTable}>
            <TaskTable tasks={dashboardData.tasks} />
          </div>
          <div className={styles.departmentChart}>
            <DepartmentChart data={dashboardData.departments} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
