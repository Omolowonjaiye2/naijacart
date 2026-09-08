import {createContext,useContext,useEffect,useState} from 'react';
const WishlistContext=createContext();
export function WishlistProvider({children}){const [wishlist,setWishlist]=useState(()=>JSON.parse(localStorage.getItem('naijacart-wishlist')||'[]')); useEffect(()=>localStorage.setItem('naijacart-wishlist',JSON.stringify(wishlist)),[wishlist]); const toggleWishlist=p=>setWishlist(w=>w.some(i=>i.id===p.id)?w.filter(i=>i.id!==p.id):[...w,p]); const removeWishlist=id=>setWishlist(w=>w.filter(i=>i.id!==id)); return <WishlistContext.Provider value={{wishlist,toggleWishlist,removeWishlist,count:wishlist.length}}>{children}</WishlistContext.Provider>}
export const useWishlist=()=>useContext(WishlistContext);
