import React, {useState} from 'react';
import DataTable from './DataTable';
import FormSubmit from './FormSubmit';

export default function Inputs({operationsList, setOperationList}) {

    const [modify, setModify] = useState(false);

    const [form, setForm] = useState({
        concept: '',
        amount: '',
        dateOperation: '',
        operation: ''
    })

    return (
        <>
            <p className="titles">Ingresos</p>
            <FormSubmit
             operationsList={operationsList} setOperationList={setOperationList}
             modify={modify} setModify={setModify}
             form={form} setForm={setForm}
             />
            <DataTable
             operationsList={operationsList} setOperationList={setOperationList}
             modify={modify} setModify={setModify}
             form={form} setForm={setForm}
            />
        </>
    )
}
