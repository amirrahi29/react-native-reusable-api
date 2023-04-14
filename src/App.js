import { useState } from 'react';
import './App.css';
import { fetchAllProducts } from './CustomApiClass';

function App() {

  const [products, setProducts] = useState([]);
  const [statusCode, setStatusCode] = useState(0);

  useState(() => {
    setTimeout(() => {
      getAllProducts();
    }, 1000);
  }, []);

  const getAllProducts = async () => {
    try {
      let result = await fetchAllProducts("https://fakestoreapi.com/products");
      console.log(result.data);
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getApiStatus = async () => {
    try {
      let result = await fetchAllProducts("https://fakestoreapi.com/products");
      console.log(result);
      setStatusCode(result.status);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <h1>Status Code: {statusCode}</h1>
      <div style={{ height: '400px' }}>
        {
          products.length ==null ?
            <h1>No products!</h1> :
            products.map((item, index) => {
              return (
                <>
                  <p onClick={()=>getApiStatus()}>{item.title}</p>
                </>
              );
            })
        }
      </div>
    </>
  );
}

export default App;
