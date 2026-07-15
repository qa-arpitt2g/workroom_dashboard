'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  CheckSquare,
  Users,
  Building2,
  FileText,
  ChevronLeft,
  ChevronDown
} from 'lucide-react';
import styles from './Sidebar.module.css';

const menuItems = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'departments', label: 'Departments', icon: Building2 },
  { id: 'reports', label: 'Reports', icon: FileText },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('overview');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoSection}>
        <div className={styles.logoBadge}>TG</div>
        {!collapsed && <span className={styles.logoText}>Tech2Globe</span>}
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
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={styles.activeIndicator}
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                  <Icon className={styles.navIcon} size={18} strokeWidth={isActive ? 2.5 : 2} />
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
            <img src="/assets/tech2globe-logo.webp" alt="Tech2Globe Logo" />
          </div>
          {!collapsed && (
            <div className={styles.userInfo}>
              <span className={styles.userName}>Tech2Globe</span>
              <span className={styles.userRole}>Super Admin</span>
            </div>
          )}
        </div>

        {!collapsed && (
          <button
            className={styles.collapseButton}
            onClick={() => setCollapsed(!collapsed)}
          >
            <ChevronLeft size={14} />
          </button>
        )}
        {collapsed && (
          <button
            className={styles.collapseButton}
            onClick={() => setCollapsed(!collapsed)}
            style={{ margin: '0 auto' }}
          >
            <ChevronLeft size={14} className={styles.rotated} />
          </button>
        )}
      </div>
    </aside>
  );
}
