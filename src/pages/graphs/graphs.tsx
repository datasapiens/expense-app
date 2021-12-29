// outsource dependencies
import React, { memo } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { useControllerData, useControllerActions } from 'redux-saga-controller';

// local dependencies
import { GraphMostCommonExpensesChart } from './charts/graph-most-common-expenses-chart';
import { GraphExpensesChart } from './charts/graph-expenses-chart';


export const Graphs = memo(function Graphs () {
  // const { data, disabled, initialized } = useControllerData(controller);

  // const { initialize, getSelf } = useControllerActions(controller);

  return (<Container fluid="xl">
    <Row>
      <Col sm="12" md="4" className="mb-4">
        <Card>
          <CardBody>
            <GraphMostCommonExpensesChart />
          </CardBody>
        </Card>
      </Col>
      <Col sm="12" md="4">
        <GraphExpensesChart />
      </Col>
      <Col sm="12" md="4">

      </Col>
    </Row>
  </Container>);
});
