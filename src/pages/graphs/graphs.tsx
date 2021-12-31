// outsource dependencies
import React, { memo } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

// local dependencies
import { GraphMostCommonExpensesChart } from './charts/graph-most-common-expenses-chart';
import { GraphExpensesLineChart } from './charts/graph-expenses-line-chart';
import { GraphExpensesBarChart } from './charts/graph-expenses-bar-chart';


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
        <Card>
          <CardBody>
            <GraphExpensesBarChart />
          </CardBody>
        </Card>
      </Col>
      <Col sm="12" md="4">
        <Card>
          <CardBody>
            <GraphExpensesLineChart />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>);
});
