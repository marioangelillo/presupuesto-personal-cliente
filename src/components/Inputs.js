import React from 'react';
import DataTable from './DataTable';
import FormSubmit from './FormSubmit';

export default function Inputs() {
    return (
        <>
            <p className="titles">Ingresos</p>
            <hr/>
            <FormSubmit />
            <DataTable />
        </>
    )
}
