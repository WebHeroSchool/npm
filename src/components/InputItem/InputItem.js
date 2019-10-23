import React from 'react';
import styles from './InputItem.module.css';
import classnames from 'classnames';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    isError: false,
  };

  onButtonClick = () => {
    if (this.state.inputValue === '') {
      this.setState({
        isError: true,
      })
    } else {
      this.setState({
        inputValue: '',
        isError: false
      })
  
      this.props.onClickAddItem(this.state.inputValue);
    };
  };

  render() {
    return (
      <div className={styles.wrap}>
        <div className={classnames({
          [styles['wrap__error-empty-text']]: this.state.isError,
        })}>
          <input
            placeholder={'Введите текст'}
            className={styles.wrap__input}
            value={this.state.inputValue}
            onChange={event => this.setState({ inputValue: event.target.value })}>
          </input>
        </div>
        <button className={styles.wrap__button} onClick={this.onButtonClick}></button>
      </div>
    );
  }
};

export default InputItem;