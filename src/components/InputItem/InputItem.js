import React from 'react';
import TextField from '@material-ui/core/TextField';
import inputItemStyles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    isError: false
  };

  onButtonClick = () => {
    this.state.inputValue = this.state.inputValue.replace(/ +/g, ' ').trim();
    if (this.state.inputValue === '') {
      this.setState({
        isError: true
      })
    } else {
      this.setState({
        inputValue: '',
        isError: false
      })
  
      this.props.onClickAddItem(this.state.inputValue.toUpperCase());
    }
  };

  render() {
    let textField;
    if (this.state.isError === false) {
      textField = <TextField
        id='standard-dense'
        className={inputItemStyles.input}
        label='What needs to be done?'
        margin='dense'
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value })}
      />
    } else {
      textField = <TextField
        error
        id='standard-dense'
        className={inputItemStyles.input}
        label='For add a case you need to enter text!'
        margin='dense'
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value })}
      /> 
    };

    return (
      <div className={inputItemStyles.wrap}>
        { textField }
        <Button
          variant="contained"
          className={inputItemStyles.button}
          onClick={this.onButtonClick}
        >
          Add
        </Button>
      </div>)
  }
};

export default InputItem;