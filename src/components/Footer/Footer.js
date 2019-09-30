import React from 'react';
import PropTypes from 'prop-types';
import footerStyles from './Footer.module.css';

const Footer = ({ count }) => (
  <div className={footerStyles.footer}>
    <div className={footerStyles.left}>{count} items left</div>
    <button className={footerStyles['button-show-all']}>All</button>
    <button className={footerStyles['button-show-active']}>Active</button>
    <button className={footerStyles['button-show-completed']}>Completed</button>
    <button className={footerStyles['button-clear-completed']}>Clear completed</button>
  </div>
);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;