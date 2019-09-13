import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const importantCase = 'Изучить React';

const App = () => (
  <div>
    <h1 style = {{
      fontSize: '50px',
      color: '#696969'
    }}>Важные дела:</h1>
    <InputItem/>
    <ItemList importantCase={importantCase} />
    <Footer count={3} />
  </div>);

export default App;