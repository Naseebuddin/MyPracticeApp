//Base URL
export const API_BASE_URL = `https://fakestoreapi.com/`;
// joining the endpoint 
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const API_PODUCTS_URL = getApiUrl('products');
export const API_CARTS_URL = getApiUrl('carts');
export const API_AUTH_LOGIN_URL = getApiUrl('auth/login');
export const API_SINGLE_PRODUCTS_URL = getApiUrl('products/1');
export const API_LIMITS_PRODUCTS_URL = getApiUrl('products?limit=2');
export const API_DESCENDING_PRODUCTS_URL = getApiUrl('products?sort=desc');
export const API_JEWELERY_PRODUCTS_URL = getApiUrl('products/category/jewelery');
export const API_ELECTRONIC_PRODUCTS_URL = getApiUrl('products/category/electronics');
export const API_MANS_PRODUCTS_URL = getApiUrl(`products/category/men's%20clothing`);
export const API_WOMENS_PRODUCTS_URL = getApiUrl(`products/category/women's%20clothing`);
export const Api_ADDNEW_PRODUCTS_URL =getApiUrl(`products`)