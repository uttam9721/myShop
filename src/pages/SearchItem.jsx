// // import React, { useContext, useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { AppContext } from "../context/AppContext"; // ✅ correct import
// // import Products from "./Products";

// // const SearchItem = () => {
// //   const { term } = useParams();
// //   const { fetchProduct, product, loading } = useContext(AppContext);
// //   const [filterData, setFilterData] = useState([]);

// //   useEffect(() => {
// //     fetchProduct();
// //   }, []);

// //   useEffect(() => {
// //     if (product.length > 0) {
// //       const data = product.filter((item) =>
// //         item.title.toLowerCase().includes(term.toLowerCase())
// //       );
// //       setFilterData(data);
// //     }
// //   }, [term, product]);

// //   if (loading) return <p>Loading...</p>;

// //   return (
// //     <div>
// //       <h2>Search Results for: {term}</h2>
// //       {filterData.length > 0 ? (
// //         <Products item={filterData} />
// //       ) : (
// //         <p>No products found for "{term}"</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default SearchItem;









// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import Products from "./Products";

// const SearchItem = () => {
//   const { term } = useParams();
//   const decodedTerm = decodeURIComponent(term || "").toLowerCase();

//   const { fetchProduct, product, loading } = useContext(AppContext);
//   const [filterData, setFilterData] = useState([]);

//   // ✅ Fetch only if products are empty
//   useEffect(() => {
//     if (product.length === 0) {
//       fetchProduct();
//     }
//   }, [fetchProduct, product.length]);

//   // ✅ Proper filtering
//   useEffect(() => {
//     if (!decodedTerm || product.length === 0) {
//       setFilterData([]);
//       return;
//     }

//     const filtered = product.filter((item) =>
//       item?.title?.toLowerCase().includes(decodedTerm)
//     );

//     setFilterData(filtered);
//   }, [decodedTerm, product]);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">
//         Search Results for: "{decodedTerm}"
//       </h2>

//       {filterData.length > 0 ? (
//         <Products item={filterData} />
//       ) : (
//         <p className="text-gray-500">
//           No products found for "{decodedTerm}"
//         </p>
//       )}
//     </div>
//   );
// };

// export default SearchItem;





import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import Products from "./Products";

const SearchItem = () => {
  const { term } = useParams();
  const decodedTerm = decodeURIComponent(term || "").toLowerCase();

  const { product, loading } = useContext(AppContext);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filtered = product.filter((item) =>
      item.title.toLowerCase().includes(decodedTerm)
    );
    setFilterData(filtered);
  }, [decodedTerm, product]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <h2 className="text-xl font-bold px-6 mt-4">
        Search Results for "{decodedTerm}"
      </h2>

      <Products item={filterData} />
    </>
  );
};

export default SearchItem;
