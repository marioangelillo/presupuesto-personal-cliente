import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';

function App() {

  const [operationsList, setOperationList] = useState([]);

  useEffect(() => {
      selectOperations();
  }, []);

  const selectOperations = async () =>{
    const request = await fetch('http://localhost:4000/api/select',{
        method: 'GET',
        headers : {
        'Content-Type': 'application/json'
        }
    });

  console.log(request)
  const response = await request.json();
  console.log(response)

  if(request.ok){
      setOperationList(response);        
  }else {
      alert('Hubo un error');
  }
}

  return (
    <>
      <Menu operationsList={operationsList} setOperationList={setOperationList}/>
    </>
  );
}

export default App;
