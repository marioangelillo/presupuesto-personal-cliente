import React from 'react';
import DataTable from './DataTable';
import FormSubmit from './FormSubmit';

export default function Outputs() {
    return (
        <>
            <p className="titles">Egresos</p>
            <hr/>
            <FormSubmit />
            <DataTable />
        </>
    )
}
