import { InputText } from "primereact/inputtext";
import React, { Component, Fragment } from "react";
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
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import Loader from "../../components/Loader";
import { Transaction } from "../../models/Transaction";
import "./transactiondetails.scss";
import { SelectItem } from "../../models/SelectItem";
import _ from "lodash";
import { Calendar } from "primereact/calendar";
import { localStorageService } from "../../services/LocalStorageService";
import history from "../../history";
import ExtendedInputText from "../Category/ExtendedInputText";

interface TransactionDetailsState {
    isLoading: boolean;
    transactions: Transaction | null;
    TransactionId?: number;
    validationErrors: Map<string, boolean>;
}

export default class TransactionDetail extends Component<{},TransactionDetailsState> {

    categories: SelectItem<number>[] = [];

    constructor(props: {}) { 
        super(props);

        this.state = {
            TransactionId: parseInt(_.last(window.location.pathname.split("/")) ?? ""),
            transactions: null,
            isLoading: true,
            validationErrors: new Map<string, boolean>()
        };
    }

    componentDidMount() {
        this.categories = localStorageService.getCategories().map(item => ({ label: item.label, value: item.id } as SelectItem<number>));

        this.setState({
            transactions: new Transaction(),
            isLoading: false,
        });
    }

    updateValue = (fieldName: string, value: string) => {
        var transactionDetails = this.state.transactions as any;

        transactionDetails[fieldName] = value;

        this.setState({ transactions: transactionDetails });
    };

    setValidationErrors = (name: string, value: boolean) => {
        var validationErrors = this.state.validationErrors;
        
        if (validationErrors.get(name) === value) {
            return;
        }
        validationErrors.set(name, value);
        this.setState({ validationErrors: validationErrors });
    }

    onSubmitButtonClick = async () => {
        this.setState({ isLoading: true });

        const transaction = this.state.transactions!;

        var objToPost: Transaction = {
            label: transaction.label,
            date: transaction.date,
            amount: transaction.amount,
            category: transaction.category,
        } as Transaction;

        localStorageService.setTransactionData(objToPost);

        this.setState({ isLoading: false });

        history.push(`/`);
    };

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
                                                        Transaction Details
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
                                                                        value={this.state.transactions?.label}
                                                                        required={true}
                                                                        onChange={(value) =>
                                                                            this.updateValue("label", value)
                                                                        }
                                                                        onValidStatusChanged={(value: boolean) => this.setValidationErrors(`label`, value)}
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <FormGroup>
                                                                        <Label>Date</Label>
                                                                        <Calendar
                                                                            id="date"
                                                                            style={{ width: "100%" }}
                                                                            value={this.state.transactions?.date}
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md={6}>
                                                                    <FormGroup>
                                                                        <Label>Amount</Label>
                                                                        <InputText
                                                                            type="number"
                                                                            value={this.state.transactions?.amount}
                                                                            className={"form-control"}
                                                                            onChange={(
                                                                                event: React.ChangeEvent<HTMLInputElement>
                                                                            ) =>
                                                                                this.updateValue(
                                                                                    "amount",
                                                                                    event.target.value
                                                                                )
                                                                            }
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Label>Categories</Label>
                                                                    <FormGroup>
                                                                        <Dropdown
                                                                            value={this.state.transactions?.category}
                                                                            options={this.categories}
                                                                            optionLabel="label"
                                                                            optionValue="value"
                                                                            onChange={(e) =>
                                                                                this.updateValue("category", e.value)
                                                                            }
                                                                            placeholder={"Select Category"}
                                                                            itemTemplate={(option) => {
                                                                                return <span>{option.label}</span>;
                                                                            }}
                                                                            style={{ width: "100%" }}
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
