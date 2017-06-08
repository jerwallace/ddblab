import React, {Component} from 'react';

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundImage: 'url("https://farm4.staticflickr.com/3949/15589950511_3675b15e59_k.jpg")',
    color: 'white'
  },
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  },
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem'
  }
};

export class Title extends Component {
  render() {
    return (
      <div className="hero-image" style={styles.title}/>
    );
  }
}
