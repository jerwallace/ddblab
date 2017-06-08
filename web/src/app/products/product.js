import React, {Component} from 'react';

const styles = {
  product: {
    height: '15rem',
    width: '15rem',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem'
  },
  price: {
    float: 'right',
    margin: 10,
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0'
  },
  h4: {
    fontSize: '1.2rem',
    margin: '0 0 2rem 0',
    fontWeight: 'bold'
  }
};

export class Product extends Component {
  render() {
    return (
      <div style={styles.product}>
        <p style={styles.price}>
          ${this.props.product.Price}
        </p>
        <h4 style={styles.h4}>
          {this.props.product.ProductCategory}
        </h4>
        <h3 style={styles.h3}>
          {this.props.product.Title}
        </h3>
        <p>{this.props.product.Description}</p>
        <p>Color: {this.props.product.Color}</p>
      </div>
    );
  }
}

Product.propTypes = {
  product: React.PropTypes.object.isRequired
};
