import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => {
  const items = [
    {
      value: 'Изучить React'
    },
    {
      value: 'Подготовиться к собеседованию'
    },
    {
      value: 'Найти работу!'
    }
  ];

  return (
  <div>
    <h1 style = {{
      fontSize: '50px',
      color: '#696969'
    }}>Важные дела:</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3} />
  </div>)};

export default App;