import React from 'react'
import './style.css'

const Table = ({ isLoading = true, data, columns, onRowClicked = () => { } }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {
                            columns.map(column => (
                                <th key={column.key}>{column.title}</th>
                            ))
                        }
                    </tr>
                </thead>
                {
                    !isLoading &&
                    <tbody>
                        {
                            data.map(row => (
                                <tr key={row.id} onClick={() => onRowClicked(row.id)}>
                                    {
                                        columns.map(column => (
                                            <td key={`${row.id + column.key}`}> {column.render ? column.render(row) : row[column.key]}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                }
                {isLoading && <h1>Loading ...</h1>}
            </table>
        </>
    )
}
export default Table