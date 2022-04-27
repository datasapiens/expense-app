import cn from 'classnames';
import { Link } from 'react-router-dom';
import { allRoutes, homeRoutes } from 'routes';
import './AppHeader.scss';

type PageTitleProps = {
  className?: string;
};

export const AppHeader: React.FC<PageTitleProps> = ({ className }) => {
  return (
    <div className={cn('app-header', className)}>
      <h1 className="app-header__title">
        <Link to={homeRoutes.path}>App</Link>
      </h1>

      <ul className="app-header__nav">
        {allRoutes.map((route) => (
          <li key={route.path} className="app-header__nav-item">
            <Link to={route.path} className="app-header__nav-link">
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
