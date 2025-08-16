import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Buy from "./Components/Buy";
import { ProductProvider } from "./Components/productContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Buy" element={<Buy />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
