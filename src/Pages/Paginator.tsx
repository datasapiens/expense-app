import React from "react";
import { Dropdown } from 'primereact/dropdown';
import { PaginatorTemplateOptions, PaginatorRowsPerPageDropdownOptions } from "primereact/paginator";
import { DataTablePFSEvent } from "primereact/datatable";

var paginatorTemplate: PaginatorTemplateOptions = {
    layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",
    RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
        const dropdownOptions = [
            { label: 10, value: 10 },
            { label: 20, value: 20 },
            { label: 50, value: 50 },
        ];

        return (
            <>
                <span className="p-mx-1" style={{ color: "var(--text-color)", userSelect: "none" }}>
                    Items per page:{" "}
                </span>
                <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} appendTo={document.body} />
            </>
        );
    },
    CurrentPageReport: (options : DataTablePFSEvent) => {
        return (
            <span style={{ color: "var(--text-color)", userSelect: "none", width: "120px", textAlign: "center" }}>
                {options.first } - {options.last} of {options.totalRecords}
            </span>
        );
    },
} as any;

export interface IPagedState {
    first: number;
    page: number;
    pageRowCount: number;
}

const OnPageChange = async (component: React.Component<any, IPagedState>, event : DataTablePFSEvent, callback: (page: number, count: number) => Promise<any>) => {
    component.setState({
        first: event.first,
        page: event.page!,
        pageRowCount: event.rows,
    });

    await callback(event.page!, event.rows);
}

export { paginatorTemplate, OnPageChange };