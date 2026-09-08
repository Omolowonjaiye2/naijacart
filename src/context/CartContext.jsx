import {createContext,useContext,useEffect,useMemo,useState} from 'react';
const CartContext=createContext();
export function CartProvider({children}){const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem('naijacart-cart')||'[]')); useEffect(()=>localStorage.setItem('naijacart-cart',JSON.stringify(cart)),[cart]);
 const addToCart=(product,qty=1)=>setCart(c=>{const x=c.find(i=>i.id===product.id); return x?c.map(i=>i.id===product.id?{...i,quantity:i.quantity+qty}:i):[...c,{...product,quantity:qty}];});
 const removeFromCart=id=>setCart(c=>c.filter(i=>i.id!==id)); const updateQty=(id,q)=>setCart(c=>q<1?c.filter(i=>i.id!==id):c.map(i=>i.id===id?{...i,quantity:q}:i)); const clearCart=()=>setCart([]);
 const subtotal=useMemo(()=>cart.reduce((s,i)=>s+i.price*i.quantity,0),[cart]); const count=useMemo(()=>cart.reduce((s,i)=>s+i.quantity,0),[cart]);
 return <CartContext.Provider value={{cart,addToCart,removeFromCart,updateQty,clearCart,subtotal,count}}>{children}</CartContext.Provider>}
export const useCart=()=>useContext(CartContext);
