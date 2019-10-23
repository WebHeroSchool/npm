import React from 'react';
import inputItemStyles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    isError: false
  };

  onButtonClick = () => {
    if (this.state.inputValue === '') {
      this.setState({
        isError: true
      })
    } else {
      this.setState({
        inputValue: '',
        isError: false
      })
  
      this.props.onClickAddItem(this.state.inputValue);
    }
  };

  render() {
    let textField;
    if (this.state.isError === false) {
      textField = <input
        placeholder='Введите текст'
        className={inputItemStyles.input}
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value })}
      ></input>
    } else {
      textField = <input
        placeholder='Для добавления дела нужно ввести текст!'
        className={inputItemStyles.input_error}
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value })}
      ></input>
    };

    return (
      <div className={inputItemStyles.wrap}>
        { textField }
        <button
          className={inputItemStyles.button}
          onClick={this.onButtonClick}
        >
        </button>
      </div>)
  }
};

export default InputItem;