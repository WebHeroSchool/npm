import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todo from '../Todo/Todo';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styles from './App.module.css';

const App = () =>
  (<Router>
    <div className={styles.wrap}>
      <Card className={styles.sidebar}>
        <MenuList>
          <Link to='/' className={styles.link}><MenuItem>About me</MenuItem></Link>
          <Link to='/todo' className={styles.link}><MenuItem>Todos</MenuItem></Link>
          <Link to='/contacts' className={styles.link}><MenuItem>Contacts</MenuItem></Link>
        </MenuList>
      </Card> 

      <Card>
        <Route path='/' exact component={AboutMe} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </Card>
    </div>
  </Router>);

export default App;