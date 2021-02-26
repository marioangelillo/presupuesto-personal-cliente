import React from 'react';
import DataTable from './DataTable';
import FormSubmit from './FormSubmit';

export default function Inputs({operationsList, setOperationList}) {
    return (
        <>
            <p className="titles">Ingresos</p>
            <FormSubmit operationsList={operationsList} setOperationList={setOperationList}/>
            <DataTable operationsList={operationsList} setOperationList={setOperationList}/>
        </>
    )
}
