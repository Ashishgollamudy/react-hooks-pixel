import React from "react";
import Fade from 'react-reveal/Fade';

const cardStyle = { padding:"10px", marginTop : "40px" };
const cardTitle = { fontWeight: "bold"}
const deviceTop = { marginTop : "10px"}

export const ProductSummary = ({summary, previousStep}) => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 offset-md-3 text-center" style={deviceTop}>
                    <Fade>
                      <h2 id="Title">Summary</h2>
                    </Fade>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 offset-md-1">
                      <img className="card-img-top" src={summary.img} alt="device"/>
                      <div className="text-center" style={deviceTop}>
                        <Fade>
                          <h4 style={cardTitle}>{`${summary.device}-${summary.storage}, ${summary.carrier}`}</h4>
                        </Fade>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card" style={cardStyle}>
                        <div className="card-body">
                          <Fade>
                            <div>
                              <div className="text-center">
                                <h4 className="card-title" style={cardTitle}>Please review before Checkout</h4>
                              </div>
                              <div className="text-center">
                                <h5>Price : {`$${summary.price}`}</h5>
                              </div>
                              <div className="text-center">
                                <h5>Tax   : $40</h5>
                              </div>
                              <hr/>
                              <div className="text-center">
                                <h5>Total : {`$${parseInt(summary.price) + 40}`}</h5>
                              </div>
                              <div className="text-center">
                                <button className="btn btn-info" onClick={() => previousStep()}>Cancel</button>
                                <button className="btn btn-success" style={{marginLeft: "5px"}}>Checkout</button>
                              </div>
                            </div>
                          </Fade>

                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
