import React from 'react';
import PropTypes from 'prop-types';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import classnames from 'classnames';
import styles from '../App/App.module.css';
import itemStyles from './Item.module.css';

class Item extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { value, isDone, onClickDone, id, onClickDeleteItem } = this.props;

    return(<span className={
      classnames({
        [styles.item]: true,
        [styles.done]: isDone,
      })
    }>
      <div className={itemStyles.item}>
        <span className={itemStyles.text} onClick={() => onClickDone(id)}>{value}</span>
        <button className={itemStyles.button} onClick={() => onClickDeleteItem(id)}><DeleteForeverIcon className={itemStyles.icon}></DeleteForeverIcon></button>
      </div>
    </span>)
  }
}

Item.defaultProps = {
  value: "Дело было потеряно!",
  isDone: true
};

Item.propTypes = {
  isDone: PropTypes.bool.isRequired
};

export default Item;