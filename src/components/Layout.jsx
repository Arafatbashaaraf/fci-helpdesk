import { Outlet } from 'react-router-dom';
import Header from './Header';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <div className={styles.shell}>
      <Header />
      <Outlet />
    </div>
  );
}
