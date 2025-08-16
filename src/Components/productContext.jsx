import { createContext, useState, useContext } from "react";

// create context
const ProductContext = createContext();

// provider component
export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// custom hook for easy use
export const useProduct = () => useContext(ProductContext);
