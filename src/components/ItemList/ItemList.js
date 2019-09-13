import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ importantCase }) => (
  <ul>
    <li><Item importantCase={importantCase} /></li>
    <li><Item importantCase={'Подготовиться к собеседованию'} /></li>
    <li><Item importantCase={'Найти работу!'} /></li>
  </ul>);

export default ItemList;