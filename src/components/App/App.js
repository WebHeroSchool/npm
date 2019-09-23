import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        value: 'Изучить React',
        isDone: false
      },
      {
        id: 2,
        value: 'Подготовиться к собеседованию',
        isDone: false
      },
      {
        id: 3,
        value: 'Найти работу!',
        isDone: false
      },
      {
        id: 4,
        value: 'Тест',
        isDone: true
      },
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = item;
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    })

    this.setState({ items: newItemList });
  };  


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