import { Fragment, useEffect, useState } from "react";
import { CardHeader, Container, Card, CardBody, Button } from "reactstrap";
import { DataTable, DataTablePFSEvent } from "primereact/datatable";
import { Column } from "primereact/column";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { paginatorTemplate } from '../Paginator';
import history from "../../history";
import { Transaction } from "../../models/Transaction";
import moment from "moment";
import { localStorageService } from "../../services/LocalStorageService";
import { SelectItem } from '../../models/SelectItem';
import _ from "lodash";

export const Transactions = () => {

    const [categories, setCategories] = useState<SelectItem<number>[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        loadCategoriesAndTransactions();
    }, []);

    const loadCategoriesAndTransactions = () => {
        setIsLoading(true);

        setCategories(localStorageService.getCategories().map(item => ({ label: item.label, value: item.id } as SelectItem<number>)));

        // to add a loading effect only.
        setTimeout(() => {
            var transactionsResult = localStorageService.getTransactions();
            setIsLoading(false);
            setTransactions(transactionsResult);
        }, 1000);
    }

    const categoryTemplate = (rowData: Transaction) => {
        var list = _.filter(categories, (c) => c.value == rowData.category);
        return (
            <div>
                <span>{list.length > 0 ? list[0].label : "Food"}</span>
            </div>
        );
    }

    const onPageChange = (event: DataTablePFSEvent) => {
        setFirst(event.first);
        setRows(event.rows);
        setCurrentPage(event.page! + 1);
    }

    const onActionButtonClick = (TransactionId: number) => {
        history.push(`/transaction-details/${TransactionId}`);
    };

    const renderHeader = () => {
        return (
            <Button className={"p-button-secondary"} icon="pi pi-plus" onClick={() => onActionButtonClick(0)} >
                Add Transaction
            </Button>
        );
    };

    return (
        <Fragment>
            <TransitionGroup appear={true} exit={false} enter={false}>
                <CSSTransition classNames="TabsAnimation" timeout={1500}>
                    <Fragment>
                        <Container fluid>
                            <Card className="mb-3">
                                <CardHeader className="card-header-tab">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        <i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"> </i>
                                        Transactions
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <DataTable
                                        header={renderHeader}
                                        value={transactions}
                                        stripedRows={true}
                                        paginator
                                        paginatorTemplate={paginatorTemplate}
                                        loading={isLoading}
                                        first={first}
                                        rows={rows}
                                        onPage={(event) => onPageChange(event)}
                                        paginatorClassName="p-jc-end"
                                    >
                                        <Column field="id" header="Id" sortable></Column>
                                        <Column field="label" header="Transaction label" sortable></Column>
                                        <Column field="date" header="Transaction Date"
                                            body={(rowData: Transaction) => <p>{moment(rowData.date).format("DD/MM/YYYY")}</p>}
                                            sortable></Column>
                                        <Column field="amount" header="Transaction Amount" sortable></Column>
                                        <Column field="category" body={categoryTemplate} header="Category" sortable></Column>
                                    </DataTable>
                                </CardBody>
                            </Card>
                        </Container>
                    </Fragment>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
}

