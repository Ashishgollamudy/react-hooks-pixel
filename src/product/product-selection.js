import React from "react";
import { ProductDevices } from "./product-device";
import Fade from "react-reveal/Fade";

export const ProductPick = ({ products, selectDevice }) => {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-md-4 offset-md-5">
          <Fade left cascade>
            <h3 id="Title">Choose your Pixel 4</h3>
          </Fade>
        </div>
      </div>
      <div className="row">
        <ProductDevices products={products} selectDevice={selectDevice} />
      </div>
    </div>
  );
};
