const BASE='https://dummyjson.com';
async function request(path){const res=await fetch(`${BASE}${path}`); if(!res.ok) throw new Error('Request failed'); return res.json();}
export const getProducts=()=>request('/products?limit=100');
export const getProduct=(id)=>request(`/products/${id}`);
export const searchProducts=(q)=>request(`/products/search?q=${encodeURIComponent(q)}&limit=100`);
export const getCategories=()=>request('/products/categories');
export const getCategoryProducts=(category)=>request(`/products/category/${encodeURIComponent(category)}?limit=100`);
