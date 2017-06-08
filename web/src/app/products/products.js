import React, {Component} from 'react';
import axios from 'axios';
import {Product} from './product';

const API_URL = '<INSERT_URL_HERE>s';
const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  products: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class Products extends Component {
  constructor() {
    super();
    this.state = {products: []};
  }

  componentDidMount() {
    axios
      .get(API_URL)
      .then(response => {
        this.setState({products: response.data.Items});
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Check out our products!
        </h2>
        <div style={styles.products}>
          {this.state.products.map((product, i) => (
            <Product key={i} product={product}/>
          ))}
        </div>
      </div>
    );
  }
}
