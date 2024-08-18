// src/components/Layout.tsx
import React from 'react';
import NavBar from './NavBar';
import styles from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;