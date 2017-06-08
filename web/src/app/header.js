import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f1f1'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: '#333'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="static/daintree-logo.png" height="40"/>
            <i className="fa fa-pagelines" aria-hidden="true"/>
          </a>
        </p>
        <p style={styles.date}>
           An Online Store
        </p>
      </header>
    );
  }
}
