import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => (
  <div>
    <h1 style = {{
      fontSize: '50px',
      color: '#696969'
    }}>Важные дела:</h1>
    <InputItem />
    <ItemList />
    <Footer />
  </div>);

export default App;