import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart,setCart]=useState([]);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      
      const data = await response.json();
      setProduct(data);
      console.log(data);
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const addToCart=(products)=>{
    setCart([...cart,products])

  }

  return (
    <AppContext.Provider value={{ product, loading,cart,setCart,addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
