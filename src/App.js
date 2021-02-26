import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';

function App() {

  useEffect(() => {
    console.log('traer todos los datos')
  }, []);

  return (
    <>
      <Menu />
    </>
  );
}

export default App;
