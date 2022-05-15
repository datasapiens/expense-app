import React from 'react';
import { PageHeader, Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const Graph = () => {
  return (
    <div className="container">
      <PageHeader className="site-page-header" title="Graph page" />
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Income"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Expenses"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

Graph.displayName = 'routes/Graph/Page/Graph';

export default Graph;
