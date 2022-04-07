import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row} from 'reactstrap';
import PageTitle from "../Layout/PageTitle";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import DoughnutChart from "../components/chart/DoughnutChart"
import BarChart from "../components/chart/BarChart";


export default class Graphs extends Component<{}, {}> {

    renderWidgets = () => {
        return (
          <Container fluid>
            <Row>
              <Col lg={12} md={12} xl={12}>
                <Row className="no-gutters">
                  <Col sm="6">
                    <DoughnutChart />
                  </Col>
                  <Col sm="6">
                    <BarChart />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        );
    }

    render() {
        return (
          <Fragment>
            <TransitionGroup
              component="div"
              appear={true}
              exit={false}
              enter={false}
            >
              <Container fluid>
                <CSSTransition classNames="TabsAnimation" timeout={1500}>
                  <PageTitle
                    heading="Dashboard"
                    icon="pe-7s-graph icon-gradient bg-ripe-malin"
                  />
                </CSSTransition>

                <CSSTransition classNames="TabsAnimation" timeout={1500}>
                  <Card className="mb-3">
                    {this.renderWidgets()}
                  </Card>
                </CSSTransition>

              </Container>
            </TransitionGroup>
          </Fragment>
        );
    }
}
