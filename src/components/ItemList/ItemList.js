import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDeleteItem }) => {
  return (
  <ul className={styles.list}>
    {items.map(item => (
    <li key={item.id}>
      <Item
        value={item.value} 
        isDone={item.isDone} 
        id={item.id} 
        onClickDone={onClickDone}
        onClickDeleteItem={onClickDeleteItem} 
      />
    </li>))}
  </ul>);
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;