import React from 'react';
import ItemList from '../ItemList/ItemList';

const showActiveTodos = ({ items }) => {
    return (
        <ItemList items={items.filter(item => item.isDone === false)} />
    )
}

const ButtonShowingActiveTodos = () => (<div>
    <button onClick='showActiveTodos()'>Active</button>
  </div>);

export default ButtonShowingActiveTodos;