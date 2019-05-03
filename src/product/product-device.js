import React from 'react';
import Fade from 'react-reveal/Fade';

export const ProductDevices = ({ products, selectDevice }) => {
  return products.map((product, index) => {
    return (
      <div className="col offset-md-1" key={index}>
        <Fade>
          <div className="row">
            <div className="col-md-12">
              <img height="400" alt="pixel3"
                src={product.img} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 offset-md-4">
              <Fade left cascade>
                <h4>{product.device}</h4>
                <p>{`From $ ${product.startPrice}`}</p>
              </Fade>
              <button className="btn btn-primary" onClick={() => selectDevice(product)}>Select</button>
            </div>
          </div>
        </Fade>
      </div>
    )
  })
}