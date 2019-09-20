import React from 'react';
import footerStyles from './Footer.module.css';
import ButtonShowingAllTodos from '../ButtonShowingAllTodos/ButtonShowingAllTodos';
import ButtonShowingActiveTodos from '../ButtonShowingActiveTodos/ButtonShowingActiveTodos';
import ButtonShowingCompletedTodos from '../ButtonShowingCompletedTodos/ButtonShowingCompletedTodos';
import ButtonClearCompletedTodos from '../ButtonClearCompletedTodos/ButtonClearCompletedTodos';

const Footer = ({ count }) => (
  <div className={footerStyles.footer}>
    <div className={footerStyles.left}>{count} items left</div>
    <ButtonShowingAllTodos />
    <ButtonShowingActiveTodos />
    <ButtonShowingCompletedTodos />
    <ButtonClearCompletedTodos />
  </div>
);

export default Footer;