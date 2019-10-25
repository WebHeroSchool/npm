import React from 'react';
import styles from './AboutMe.module.css';
import Octokit from '@octokit/rest';

const  octokit = new  Octokit();

class AboutMe extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    ErrorText: '',
    User: [],
    repoList: [],
  };

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'lunar616',
    }).then(({ data }) => {
      this.setState({
        repoList: data,
      })
    })
    .catch(() => {
      this.setState({ 
        isLoading: false,
        isError: true,
        ErrorText: 'Не удалось вывести информацию о пользователе, попробуйте позже!'
      });
    });

    octokit.users.getByUsername({
      username: 'lunar616'
    })
    .then(({data}) => {
      this.setState({ 
        User: data,
        isLoading: false,
      });
    })
    .catch(err => {
      this.setState({ 
        isLoading: false,
        isError: true,
        ErrorText: 'Не удалось вывести информацию о пользователе, попробуйте позже!'
      });
    });
  };

  render() {
    const { isLoading, repoList, isError, ErrorText, User } = this.state;

    return (
      <div className={styles.page}>
        { isLoading ? <div className={styles.preloader}></div> :
          <div>
            { isError ? <div className={styles.error}>{ErrorText}</div> :
              <div className={styles.wrap}>
                <div className={styles.user}>
                  <img className={styles.avatar} src={User.avatar_url}></img>
                  <div className={styles.info}>
                    <p>{User.login}</p>
                    <p>{User.bio}</p>
                  </div>
                </div>
                <h2 className={styles.subtitle}>My repositories:</h2>
                <div className={styles.repo}>
                  <ol>
                    {repoList.map(repo => (
                      <li key={repo.id}>
                        <a href={repo.svn_url} className={styles.link}>{repo.name}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            }
          </div>
        }
      </div>
    );
  };
};
export default AboutMe;