import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Side: FC = () => {
  return (
    <Sider>
      <h3 style={{ color: 'white', margin: '10px 0' }}>datasapiens</h3>
      <Menu key='menu' theme='dark' defaultSelectedKeys={['1']} mode='inline'>
        <Menu.Item key='1' icon={<DesktopOutlined />}>
          <Link key='link1' to='/'>
            Home
          </Link>
        </Menu.Item>
        <SubMenu key='submenu' title='Graphs' icon={<PieChartOutlined />}>
          <Menu.Item key='sub1'>
            <Link key='link2' to='/graphs'>
              Balance
            </Link>
          </Menu.Item>
          <Menu.Item key='sub2'>
            <Link key='link3' to='/graphs/incoming'>
              Incoming
            </Link>
          </Menu.Item>
          <Menu.Item key='sub3'>
            <Link key='link4' to='/graphs/outgoing'>
              Outgoing
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Side;
