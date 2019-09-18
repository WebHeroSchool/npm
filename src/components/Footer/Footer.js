import React from 'react';
import footerStyles from './Footer.module.css';
import ButtonShowingActiveTodos from '../ButtonShowingActiveTodos/ButtonShowingActiveTodos';

const Footer = ({ count }) => (
  <div className={footerStyles.footer}>
    <div className={footerStyles.left}>{count} items left</div>
    <button className={footerStyles.all}>All</button>
    <ButtonShowingActiveTodos />
    <button className={footerStyles.completed}>Completed</button>
    <button className={footerStyles.clear}>Clear completed</button>
  </div>
);

export default Footer;