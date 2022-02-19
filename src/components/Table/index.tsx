import React from 'react';

import {IColumn} from '../../shared/interfaces/global.interface';

import './style.scss';

interface Props {
    columns: IColumn[],
    tableData: any[],
}

const Table = ({columns, tableData}: Props) => {
    return (
        <div className="app-table">
            <table>
                <thead>
                <tr>
                    {columns.map((column, key) => (
                        <th key={key}>
                            {column.title}
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {
                    tableData && tableData.map((row: any, key: number) => (
                        <tr key={key}>
                            {columns.map((column, columnKey) => (
                                <td key={columnKey}>
                                    {
                                        column.render
                                            ? column.render(row)
                                            : <div>{column.key && row[column.key]}</div>
                                    }
                                </td>
                            ))}
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default Table;
