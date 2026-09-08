import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Home from './pages/Home';
import Products from './pages/Products';
import SearchResults from './pages/SearchResults';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import OrderSuccess from './pages/OrderSuccess';
import {ArrowUp} from 'lucide-react';

export default function App(){const [toast,setToast]=useState('');const notify=m=>{setToast(m);
    setTimeout(()=>setToast(''),2600)};
    return <BrowserRouter><Navbar/><Routes><Route path="/" element={<Home onToast={notify}/>}/><Route path="/products" element={<Products onToast={notify}/>}/><Route path="/products/:category" element={<Products onToast={notify}/>}/><Route path="/search" element={<SearchResults onToast={notify}/>}/><Route path="/product/:id" element={<ProductDetails onToast={notify}/>}/><Route path="/cart" element={<Cart/>}/><Route path="/wishlist" element={<Wishlist onToast={notify}/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route path="/account" element={<Account/>}/><Route path="/order-success" element={<OrderSuccess/>}/></Routes><Footer/><Toast message={toast} onClose={()=>setToast('')}/><button className="top-btn" onClick={()=>scrollTo({top:0,behavior:'smooth'})}><ArrowUp size={18}/></button></BrowserRouter>}
