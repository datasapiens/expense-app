import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import PATHS from '../../constants/paths';

const MenuBar = () => {
  return (
    <nav className="menuBar">
      <div className="menuCon" style={{ display: 'flex' }}>
        <div className="leftMenu" style={{ width: '100%' }}>
          <Menu mode="horizontal" theme="dark">
            <Menu.Item key="home" >
              <Link to={PATHS.HOME}>Home</Link>
            </Menu.Item>
            <Menu.Item key="graph">
              <Link to={PATHS.GRAPH}>Graph</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

MenuBar.displayName = 'modules/MenuBar/MenuBar';

export default MenuBar;
