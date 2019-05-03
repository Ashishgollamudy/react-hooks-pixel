import React, { useState, useEffect } from 'react';
import { ProductPick } from './product/product-selection'
import { productList } from './product/products';
import { ProductStorage } from './product/product-storage';
import { ProductCarrier } from './product/product-carrier';

import './App.css';

function App() {

  const [ step, setStep ] = useState(1);
  const [ products, setProducts ] = useState([]);
  const [ device, setDevice ] = useState({});
  const [ storage, setStorage ] = useState({});
  const [ carrier, setCarrier ] = useState('');
  const [ summary, setSummary ] = useState({});

  // called once the component is mounted
  useEffect(() => {
    const tempProducts = getProducts()
    setProducts(tempProducts);
  }, [])

  const nextStep = () => setStep(step + 1)

  const previousStep = () => setStep(step - 1)

  const selectDevice = product => {
    setDevice(product)
    setSummary({...summary, device: product.device })
    nextStep()
  }

  const selectStorage = storage => {
    setStorage(storage)
    setSummary({...summary, price: storage.price, storage: storage.memory})
    nextStep()
  }

  const selectCarrier = carrier => {
    setCarrier(carrier)
    setSummary({...summary, carrier })
    nextStep()
  }

  const renderApp = () => {
    switch (step) {
      case 1:
        return <ProductPick products={products} selectDevice={selectDevice} />
      case 2:
        return <ProductStorage device={device} previousStep={previousStep} selectStorage={selectStorage} />
      case 3:
        return <ProductCarrier device={device} previousStep={previousStep} storage={storage} selectCarrier={selectCarrier} />
      case 4:
        return <h1>{`${summary.device}, ${summary.storage} - ${summary.carrier}`}</h1>
      default:
        return <h2>Failed to load the page :( please come back.</h2>
    }
  }

  return (
    <React.Fragment>
      {renderApp()}
    </React.Fragment>
  )
}

const getProducts = () => productList;

export default App;
