
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from './components/ui/toaster';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Index from './pages/Index';
import LandingPage2 from './pages/LandingPage2';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import MyAccount from './pages/MyAccount';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-white flex flex-col">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/landing2" element={<LandingPage2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/shop" element={
              <>
                <Header />
                <Shop />
                <Footer />
              </>
            } />
            <Route path="/product/:id" element={
              <>
                <Header />
                <ProductDetail />
                <Footer />
              </>
            } />
            <Route path="/cart" element={
              <>
                <Header />
                <Cart />
                <Footer />
              </>
            } />
            <Route path="/checkout" element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            } />
            <Route path="/order-confirmation" element={
              <>
                <Header />
                <OrderConfirmation />
                <Footer />
              </>
            } />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
