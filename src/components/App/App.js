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
    ],
    count: 4
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }

      return item;
    })

    this.setState({ items: newItemList });
  };

  onClickDeleteItem = id => {
    const newItemList = this.state.items.filter(item => {
      return item.id != id;
    })

    this.setState({ items: newItemList });
  };

  onClickAddItem = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        id: state.count + 1,
        value,
        isDone: false 
      }
    ],
    count: state.count + 1
  }));

  render() {
    const countUnfulfilled = this.state.items.filter(item => item.isDone === false);
    
    return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>todos</h1>
      <InputItem onClickAddItem={this.onClickAddItem} />
      <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDeleteItem={this.onClickDeleteItem} />
      <Footer count={countUnfulfilled.length} />
    </div>)
  }
}

export default App;