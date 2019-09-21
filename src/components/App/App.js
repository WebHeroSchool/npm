import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  render() {
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
      },
      {
        value: 'Тест',
        isDone: true
      },
    ];
    const counctUnfulfilled = items.filter(item => item.isDone == false);
  
    return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>todos</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={counctUnfulfilled.length} />
    </div>)
  }
}

export default App;