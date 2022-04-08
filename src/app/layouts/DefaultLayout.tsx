import React, { useState, useEffect } from 'react';
import { Layout, Menu, Radio } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import {
  getCurrentLanguage,
  setCurrentLanguage,
  setLanguageKeys,
} from 'utils/translations';
import styles from './default-layout.module.scss';
import cx from 'classnames';
import Logo from 'assets/images/logo.png';
import LogoMobile from 'assets/images/logo-mobile.png';
import { Link } from 'react-router-dom';
import { actions } from 'app/pages/HomePage/slice';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';

const { Header, Sider, Content } = Layout;

const langugaues = [
  { label: 'EN', value: 'en-US' },
  { label: 'ES', value: 'es-ES' },
];

const DeafultLayout = props => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [language, setLanguage] = useState<string>(getCurrentLanguage());

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

  const onLangChange = (e: any) => {
    setLanguage(e.target.value);
    setLanguageKeys(e.target.value, e.target.value.split('-')[0]);
    setCurrentLanguage(e.target.value);
    dispatch(actions.setLanguage(e.target.value));
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
            <Link to="/">{i18next.t('NAV_HOME')}</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LineChartOutlined />}>
            <Link to="/graphs">{i18next.t('NAV_GRAPHS')}</Link>
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
          <div className={cx(styles['language-switcher'])}>
            <Radio.Group
              options={langugaues}
              onChange={onLangChange}
              value={language}
              optionType="button"
              buttonStyle="solid"
            />
          </div>
        </Header>
        <Content className={cx(styles['content'])}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default DeafultLayout;
