import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import styles from './default-layout.module.scss';
import cx from 'classnames';
import Logo from 'assets/images/logo.png';
import LogoMobile from 'assets/images/logo-mobile.png';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const DeafultLayout = props => {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMobile]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={cx(styles['layout-default'])}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={cx(styles['side-menu'])}
      >
        <div className={cx(styles['logo'])}>
          <img src={collapsed ? LogoMobile : Logo} alt="logo" />
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LineChartOutlined />}>
            <Link to="/graphs">Graphs</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div className={cx(styles['menu-collapse'])}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: toggle,
              },
            )}
          </div>
        </Header>
        <Content className={cx(styles['content'])}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default DeafultLayout;
