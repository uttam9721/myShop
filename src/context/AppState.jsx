// // // import React, { useEffect, useState } from "react";
// // // import AppContext from "./AppContext";
// // // import toast, { Toaster } from 'react-hot-toast';

// // // const AppState = ({ children }) => {
// // //   const [product, setProduct] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [cart,setCart]=useState([]);

// // //   const fetchProduct = async () => {
// // //     try {
// // //       const response = await fetch("https://fakestoreapi.com/products");

      
// // //       const data = await response.json();
// // //       setProduct(data);
      
// // //       setLoading(false);
// // //     } catch (error) {
// // //       console.error("Error fetching products:", error);
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchProduct();
// // //   }, []);

// // //   const addToCart=(products)=>{
// // //     setCart([...cart,products])
// // //     toast.success('added to cart')

// // //   }

// // //   return (
// // //     <AppContext.Provider value={{ product,fetchProduct, loading,cart,setCart,addToCart }}>
// // //             <Toaster position="top-center" reverseOrder={false} />
// // //       {children}
// // //     </AppContext.Provider>
// // //   );
// // // };

// // // export default AppState;






// // import React, { useEffect, useState } from "react";
// // import AppContext from "./AppContext";
// // import toast, { Toaster } from 'react-hot-toast';

// // const AppState = ({ children }) => {
// //   const [product, setProduct] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [cart, setCart] = useState([]);

// //   // Fetch products
// //   const fetchProduct = async () => {
// //     try {
// //       const response = await fetch("https://fakestoreapi.com/products");
// //       const data = await response.json();
// //       setProduct(data);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProduct();
// //   }, []);

// //   // Add To Cart Logic (with qty)
// //   const addToCart = (products) => {
// //     setCart((prevCart) => {
// //       const existingItem = prevCart.find(
// //         (item) => item.id === products.id
// //       );

// //       if (existingItem) {
// //         // Increase quantity if product already exists
// //         return prevCart.map((item) =>
// //           item.id === products.id
// //             ? { ...item, qty: item.qty + 1 }
// //             : item
// //         );
// //       } else {
// //         // Add new product with qty = 1
// //         return [...prevCart, { ...products, qty: 1 }];
// //       }
// //     });

// //     toast.success("Added to cart");
// //   };

// //   return (
// //     <AppContext.Provider
// //       value={{
// //         product,
// //         fetchProduct,
// //         loading,
// //         cart,
// //         setCart,
// //         addToCart,
// //       }}
// //     >
// //       <Toaster position="top-center" reverseOrder={false} />
// //       {children}
// //     </AppContext.Provider>
// //   );
// // };

// // export default AppState;




// import React, { useEffect, useState } from "react";
// import AppContext from "./AppContext";
// import toast, { Toaster } from "react-hot-toast";

// const AppState = ({ children }) => {
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cart, setCart] = useState([]);

//   // Fetch products
//   const fetchProduct = async () => {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       setProduct(data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, []);

//   // Add to cart
//   const addToCart = (products) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find(
//         (item) => item.id === products.id
//       );

//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === products.id
//             ? {
//                 ...item,
//                 qty: item.qty + 1,
//                 totalPrice: (item.qty + 1) * item.price,
//               }
//             : item
//         );
//       } else {
//         return [
//           ...prevCart,
//           { ...products, qty: 1, totalPrice: products.price },
//         ];
//       }
//     });

//     toast.success("Added to cart");
//   };

//   // Increase quantity
//   const increaseQty = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               qty: item.qty + 1,
//               totalPrice: (item.qty + 1) * item.price,
//             }
//           : item
//       )
//     );
//   };

//   // Decrease quantity
//   const decreaseQty = (id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id
//             ? {
//                 ...item,
//                 qty: item.qty - 1,
//                 totalPrice: (item.qty - 1) * item.price,
//               }
//             : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   // Remove item
//   const removeItem = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//     toast.error("Item removed");
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         product,
//         fetchProduct,
//         loading,
//         cart,
//         setCart,
//         addToCart,
//         increaseQty,
//         decreaseQty,
//         removeItem,
//       }}
//     >
//       <Toaster position="top-center" reverseOrder={false} />
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppState;










import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AppState = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  // user state
  const [user, setUser] = useState(null);

  // Fetch products
  const fetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // ===========================================
  // REGISTER USER
  // ===========================================
  const registerUser = async (name, email, password) => {
    try {
      const newUser = { name, email, password };

      const res = await axios.post("http://localhost:5000/users", newUser);

      toast.success("Registration Successful");
      return res.data;
    } catch (error) {
      toast.error("Registration Failed");
      console.log(error);
    }
  };

  // ===========================================
  // LOGIN USER
  // ===========================================
  const loginUser = async (email, password) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/users?email=${email}&password=${password}`
      );

      if (res.data.length > 0) {
        setUser(res.data[0]); // store logged in user
        toast.success("Login Successful");
        return true;
      } else {
        toast.error("Invalid email or password");
        return false;
      }
    } catch (error) {
      toast.error("Login Error");
      console.log(error);
    }
  };

  // Logout
  const logoutUser = () => {
    setUser(null);
    toast.success("Logged Out");
  };

  // ===========================================
  // ADD TO CART
  // ===========================================
  const addToCart = (products) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === products.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === products.id
            ? {
                ...item,
                qty: item.qty + 1,
                totalPrice: (item.qty + 1) * item.price,
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ...products, qty: 1, totalPrice: products.price },
        ];
      }
    });

    toast.success("Added to cart");
  };

  // Increase qty
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
              totalPrice: (item.qty + 1) * item.price,
            }
          : item
      )
    );
  };

  // Decrease qty
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty - 1,
                totalPrice: (item.qty - 1) * item.price,
              }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Item removed");
  };

  return (
    <AppContext.Provider
      value={{
        product,
        loading,
        cart,
        setCart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,

        // user functions
        user,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
