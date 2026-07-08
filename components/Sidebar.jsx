'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  CheckSquare, 
  User, 
  Users, 
  Building2, 
  FileText, 
  Calendar, 
  Settings,
  ChevronLeft
} from 'lucide-react';
import styles from './Sidebar.module.css';

const menuItems = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'my-tasks', label: 'My Tasks', icon: User },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'departments', label: 'Departments', icon: Building2 },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('overview');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoSection}>
        <div className={styles.logoMark}>
          <div className={styles.logoInner}></div>
        </div>
        {!collapsed && <span className={styles.logoText}>Dashboard</span>}
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <li key={item.id} className={styles.navItem}>
                <button 
                  className={`${styles.navButton} ${isActive ? styles.active : ''}`}
                  onClick={() => setActiveItem(item.id)}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className={styles.activeIndicator}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className={styles.navIcon} size={20} strokeWidth={isActive ? 2.5 : 2} />
                  {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.bottomSection}>
        <div className={styles.userCard}>
          <div className={styles.avatar}>
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User Avatar" />
          </div>
          {!collapsed && (
            <div className={styles.userInfo}>
              <span className={styles.userName}>Thomas Gepsan</span>
              <span className={styles.userRole}>Super Admin</span>
            </div>
          )}
        </div>
        
        <button 
          className={styles.collapseButton}
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronLeft size={16} className={collapsed ? styles.rotated : ''} />
        </button>
      </div>
    </aside>
  );
}
