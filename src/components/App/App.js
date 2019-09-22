import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
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
    ]
  };

  onClickDone = isDone => console.log(isDone);

  render() {
    const countUnfulfilled = this.state.items.filter(item => item.isDone === false);
  
    return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>todos</h1>
      <InputItem />
      <ItemList items={this.state.items} onClickDone={this.onClickDone} />
      <Footer count={countUnfulfilled.length} />
    </div>)
  }
}

export default App;