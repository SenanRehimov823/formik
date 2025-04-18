import React from 'react';
import { Link, Outlet } from 'react-router';
import { FiBell, FiSettings, FiUser } from 'react-icons/fi';
import styles from './layout.module.css';

const Layout = () => {
  return (
    <div className="container">
      <header className={styles.header}>
       
        <div className={styles.logo}>
          <span></span>
          <h1>
            Purple <span>Buzz</span>
          </h1>
        </div>

        
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        
        <div className={styles.icons}>
          <FiBell />
          <FiSettings />
          <FiUser />
        </div>
      </header>     
    <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
