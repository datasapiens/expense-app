import {ReactNode} from 'react';

export interface IColumn {
    title: string | ReactNode;
    key?: string;
    render?: (data: any) => ReactNode;
    sortable?: boolean;
}

export interface ISelectOptionInterface {
    label: string;
    key: number;

    [key: string]: number | string;
}

