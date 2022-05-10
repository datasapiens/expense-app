import { Component, Fragment } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Label,
  FormGroup,
  Row,
} from "reactstrap";

import { Button } from "primereact/button";

import Loader from "../../components/Loader";
import _ from "lodash";
import { Category } from "../../models/Category";
import { localStorageService } from "../../services/LocalStorageService";
import history from "../../history";
import ExtendedInputText from "./ExtendedInputText";

interface CategoryDetailState {
  isLoading: boolean;
  category: Category | null;
  categoryId?: number;
  validationErrors: Map<string, boolean>;
}

export default class CategoryDetail extends Component<{}, CategoryDetailState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      categoryId: parseInt(_.last(window.location.pathname.split("/")) ?? ""),
      category: null,
      isLoading: true,
      validationErrors: new Map<string, boolean>()
    };
  }

  componentDidMount() {

    this.setState({
      category: new Category(),
      isLoading: false,
    });
  }

  updateValue = (fieldName: string, value: string) => {
    var categoryDetails = this.state.category as any;

    categoryDetails[fieldName] = value;

    this.setState({ category: categoryDetails });
  };

  onSubmitButtonClick = async () => {
    this.setState({ isLoading: true });

    const category = this.state.category!;

    localStorageService.AddCategory(category.label);

    this.setState({ isLoading: false });

    history.push(`/`);
  };

  setValidationErrors = (name: string, value: boolean) => {
    var validationErrors = this.state.validationErrors;

    if (validationErrors.get(name) === value) {
      return;
    }
    validationErrors.set(name, value);
    this.setState({ validationErrors: validationErrors });
  }

  render() {
    const failedErrors = Array.from(this.state.validationErrors.values())
      .filter(f => f == false);

    if (this.state.isLoading) {
      return (
        <>
          <Loader />
        </>
      );
    }

    return (
      <Fragment>
        <TransitionGroup
          component="div"
          appear={true}
          exit={false}
          enter={false}
        >
          <CSSTransition classNames="TabsAnimation" timeout={1500}>
            <Fragment>
              <Container fluid>
                <div>
                  <Row>
                    <Col md="12" lg="12">
                      <Card className="mb-3">
                        <CardHeader className="card-header-tab">
                          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                            <i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6">
                              {" "}
                            </i>
                            Category Details
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col md={9} lg={9} sm="12">
                              <Row>
                                <Col md={6}>
                                  <FormGroup>
                                    <Label>Label</Label>
                                    <ExtendedInputText
                                      name="Label"
                                      value={this.state.category?.label}
                                      required={true}
                                      onChange={(value) =>
                                        this.updateValue("label", value)
                                      }
                                      onValidStatusChanged={(value: boolean) => this.setValidationErrors(`label`, value)}
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row className="align-right">
                                <div style={{ padding: "15px" }}>
                                  <Button
                                    type="button"
                                    label="Submit"
                                    icon="pi pi-check"
                                    className="p-button"
                                    onClick={this.onSubmitButtonClick}
                                    disabled={failedErrors.length > 0 || this.state.isLoading}
                                  ></Button>
                                </div>
                              </Row>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Fragment>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
