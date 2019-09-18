import React from 'react';
import TextField from '@material-ui/core/TextField';
import inputItemStyles from './InputItem.module.css';

const InputItem = () => (<div>
  <TextField
    id='standard-dense'
    className={inputItemStyles.input}
    label='What needs to be done?'
    margin='dense'
  />
</div>);

export default InputItem;