import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../../routes';
import styles from './navigation.module.scss';
const Navigation = () => {
  return (
    <ul className={styles.ulTag}>
      {mainRoutes.map((route) => {
        if (route.hasLink) {
          return (
            <li key={route.id}>
              <NavLink
                exact={route.isExact}
                activeClassName={styles.activeTab}
                to={route.path}
              >
                {route.title}
              </NavLink>
            </li>
          );
        }
        return false;
      })}
    </ul>
  );
};

export default Navigation;
