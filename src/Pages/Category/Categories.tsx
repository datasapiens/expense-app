import { Fragment, useState, useEffect, useRef } from 'react';
import { CardHeader, Container, Card, CardBody, Button } from "reactstrap";
import { DataTable, DataTablePFSEvent } from "primereact/datatable";
import { Column } from "primereact/column";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { paginatorTemplate } from '../Paginator';
import { localStorageService } from "../../services/LocalStorageService";
import { Category } from "../../models/Category";
import history from "../../history";
import { Toast } from 'primereact/toast';

export const Categories = () => {
    const toast = useRef<Toast>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = () => {
        setIsLoading(true);

        setTimeout(() => {
            var categories = localStorageService.getCategories();
            setIsLoading(false);
            setCategories(categories);
        }, 1000);
    }

    const deleteCategory = (rowData: Category) => {
        var couldDelete = localStorageService.deleteCategory(rowData);

        if (!couldDelete) {
            toast?.current?.show({ severity: "error", summary: "Error", detail: 'Cannot Delete This Category as There are one or more transactions linked to it.', life: 3000 });
            return;
        }

        const newCategories = categories.filter((category) => category.id != rowData.id);
        setCategories(newCategories);
    };

    const deleteBodyTemplate = (rowData: Category) => {
        return (
            <>
                <button type="button" className="p-row-editor-cancel p-link" tabIndex={0} onClick={() => deleteCategory(rowData)}>
                    <span className="p-row-editor-cancel-icon pi pi-fw pi-times"></span>
                </button>
            </>
        );
    };

    const onActionButtonClick = (categoryId: number) => {
        history.push(process.env.PUBLIC_URL + `/category-detail/${categoryId}`);
    };

    const renderHeader = () => {
        return (
            <Button className={"p-button-secondary"} icon="pi pi-plus" onClick={() => onActionButtonClick(0)} >
                Add Category
            </Button>
        );
    };

    const onPageChange = (event: DataTablePFSEvent) => {
        setFirst(event.first);
        setRows(event.rows);
        setCurrentPage(event.page! + 1);
    }

    return (
        <Fragment>
            <TransitionGroup appear={true} exit={false} enter={false}>
                <CSSTransition classNames="TabsAnimation" timeout={1500}>
                    <Fragment>
                        <Toast ref={toast} />
                        <Container fluid>
                            <Card className="mb-3">
                                <CardHeader className="card-header-tab">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        <i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"> </i>
                                        Categories
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <DataTable
                                        header={renderHeader}
                                        value={categories}
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
                                        <Column field="label" header="Label" sortable></Column>
                                        <Column
                                            body={deleteBodyTemplate}
                                            headerStyle={{ width: "8em", textAlign: "center" }}
                                            bodyStyle={{ textAlign: "center", overflow: "visible" }}
                                        />
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
