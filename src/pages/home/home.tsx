// outsource dependencies
import React, { memo } from 'react';
import { Col, Container, Row } from 'reactstrap';

// local dependencies

import { Category } from './category/category';
import { Transaction } from './transaction/transaction';
import { AboutSection } from '../../components/about';


export const Home = memo(function Home () {
  return (<Container fluid="xl">
    <Row>
      <Col sm="12" md="4" className="mb-4">
        <Category className="mb-4" />
        <AboutSection />
      </Col>
      <Col sm="12" md="8">
        <Transaction />
      </Col>
    </Row>
  </Container>);
});
