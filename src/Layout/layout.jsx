import Navigation from '../components/navigation/navigation';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <main className={styles.mainTag}>
      <header className={styles.headerTag}>
        {' '}
        <Navigation />{' '}
      </header>
      {children}
      <footer className={styles.footerTag}> <p>Footer</p> </footer>
    </main>
  );
};

export default Layout;
