import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import TodosMenu from '../TodosMenu/TodosMenu';
import styles from './Todo.module.css';
import Card from '@material-ui/core/Card';

class Todo extends React.Component {
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
    count: 4,
    errorRepeatCaseinInput: false,
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
      return item.id !== id;
    })
  
    this.setState({ items: newItemList });
  };
  
  onClickAddItem = value => {
    const perebor = this.state.items.filter(item => item.value == value)
    if (perebor.length === 0) {
      this.setState(state => ({
        items: [
          ...state.items,
          {
            id: state.count + 1,
            value,
            isDone: false 
          }
        ],
        count: state.count + 1,
        classNameForInputWrapp: false,
      }));
    } else {
      this.setState({ classNameForInputWrapp: true })
    }
  };
  
  render() {
    const numberOfCompleted = this.state.items.filter(item => item.isDone === true);
    const numberOfUncompleted = this.state.items.filter(item => item.isDone === false);
      
    return (
      <section className={styles.section}>
        <Card className={styles.todos}>
          <div className={styles.head}>
            <h1 className={styles.head__title}>Список моих дел</h1>
            <TodosMenu numberOfCompleted={numberOfCompleted.length} numberOfUncompleted={numberOfUncompleted.length} />
          </div>
          <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDeleteItem={this.onClickDeleteItem} />
          <InputItem items={this.state.items} classNameForInputWrapp={this.state.classNameForInputWrapp} onClickAddItem={this.onClickAddItem} />
        </Card>
      </section>);
  };
};

export default Todo;