import React from 'react';
import Fade from 'react-reveal/Fade';
import { carriers } from './products';

export const ProductCarrier = ({ device, storage, previousStep, selectCarrier }) => (
    <div className="container">
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <Fade left cascade>
                    <h3>{`${device.device},${storage.memory}`}</h3>
                </Fade>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <button className="btn btn-default" onClick={() => previousStep()}>Back</button>
            </div>
            <div className="col-md-4 text-center" style={{ marginTop: "10px" }}>
                <Fade left cascade>
                    <p id="Title">Which Carrier ?</p>
                </Fade>
            </div>
        </div>

        <div className="row" style={{ marginTop: '100px' }}>
            {carriers.map((carrier, index) =>
                <div className={`col-md-3 offset-md-${(index === 0) ? 2 : 1}`} key={index}>
                    <div onClick={() => selectCarrier(carrier.name)} className="card card-hover text-center" style={{ cursor: 'pointer',width:'300px'}}>
                        <div className="card-body">
                        <img alt="carrier" src={carrier.img} height="25px" width="25px"/>
                            <Fade left cascade>
                                <p>{carrier.name}</p>
                                <b>{`${carrier.description}*`}</b>
                            </Fade>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
)
