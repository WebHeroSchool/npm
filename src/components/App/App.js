import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import classnames from 'classnames';
import Todo from '../Todo/Todo';
import AboutMe from '../AboutMe/AboutMe';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Router>
          <header className={styles.header}>
            <nav>
              <NavLink
                to='/'
                exact
                className={styles.header__link}
                activeClassName={styles['header__about-me']}
              >
                Обо мне
              </NavLink>
              <NavLink
                to='/todo'
                className={styles.header__link}
                activeClassName={styles['header__todos']}
              >
                Дела
              </NavLink>
            </nav>
          </header>
      
          <main>
            <Route path='/' exact component={AboutMe} />
            <Route path='/todo' component={Todo} />
          </main>
        </Router>
      </div>
    );
  };
};

export default App;