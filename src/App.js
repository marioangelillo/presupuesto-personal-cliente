import React, {useEffect, useState, useRef} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const [operationsList, setOperationList] = useState([]);
  const [userAuth, setUserAuth] = useState(JSON.parse(localStorage.getItem('user')) || null ) ;

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userAuth));
  }, [userAuth])

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
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
          {
            userAuth ?
            <Menu 
                operationsList={operationsList} setOperationList={setOperationList}
                userAuth={userAuth} setUserAuth={setUserAuth}
              />
            : <Redirect to="/login" />
          }
        </Route>

        <Route exact path="/login">
          {
            !userAuth ?
            <Login setUserAuth={setUserAuth}/>
            : <Redirect to="/" />
          }
        </Route>

          <Route exact path="/register">
          {
            !userAuth ?
            <Register setUserAuth={setUserAuth}/>
            : <Redirect to="/" />
          }           
          </Route>

        </Switch> 
      </BrowserRouter>     
    </>
  );
}

export default App;
