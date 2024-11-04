import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";
import ReelsPage from "./pages/ReelsPage";
import MessagePage from "./pages/MessagePage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/message" element={<MessagePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
