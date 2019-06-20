import React from 'react';
import Fade from 'react-reveal/Fade';

export const ProductStorage = ({ device, previousStep, selectStorage }) => (
    <div className="container fluid">
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <Fade left cascade>
                    <h2 id="Title">{device.device}</h2>
                </Fade>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
            <button className="btn btn-default" onClick={() => previousStep()}>Back</button>
            </div>
            <div className="col-md-4 text-center" style={{ marginTop: "10px" }}>
                <Fade left cascade>
                    <p id="Title">How much storage ?</p>
                </Fade>
            </div>
        </div>

        <div className="row" style={{ marginTop: '100px' }}>
            {device.storages.map((storage, index) =>
                <div className={`col-md-3 offset-md-${(index === 0) ? 2 : 1}`} key={index}>
                    <div onClick={() => selectStorage(storage)} className="card card-hover text-center" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <Fade left cascade>
                                 <p>{storage.memory}</p>
                                <b>{`$${storage.price}`}</b>
                            </Fade>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
)
