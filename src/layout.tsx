import React, { FC } from 'react';
import { Layout } from 'antd';
import Sider from './components/sider';

const { Content, Footer } = Layout;

const PageLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout className='site-layout'>
        <Content style={{ margin: 50 }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          An assignment by Doruk Ucak for datasapiens. 2022.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
