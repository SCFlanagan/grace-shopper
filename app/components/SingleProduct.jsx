import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router';
import ReviewContainer from '../containers/ReviewContainer'


export default function({selectedProduct, handleCartAdd, user}) {
console.log(selectedProduct)
  return (
    <Grid className="productInfo">
      <Row className="show-grid">
        <Col sm={12} md={5} className="product-photo">
            <img className="image-responsive" src={selectedProduct.photo} />
        </Col>
        <Col sm={12} md={7} className="product-info">
            <h1> {selectedProduct.name} </h1>
            <Link to={`/category/${selectedProduct.category}`}>
              <p>{selectedProduct.category.slice(0,1).toUpperCase() + selectedProduct.category.slice(1)}</p>
            </Link>
            <h3> ${selectedProduct.price} </h3>
            <p> {selectedProduct.description} </p>

            <Link to="/cart" onClick={(e) => handleCartAdd(e, user, selectedProduct)}><Button bsStyle="info" className="add-cart-btn">
               <h4>Add to Cart</h4>
            </Button>
            </Link>
        </Col>

        <Col sm={12} >
          <ReviewContainer/>
        </Col>
      </Row>
    </Grid>
  )
}
