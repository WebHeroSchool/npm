import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const items = [
    {
      value: 'Изучить React',
      isDone: false
    },
    {
      value: 'Подготовиться к собеседованию',
      isDone: false
    },
    {
      value: 'Найти работу!',
      isDone: false
    }
  ];

  return (
  <div className={styles.wrap}>
    <h1 className={styles.title}>Важные дела:</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3} />
  </div>)};

export default App;