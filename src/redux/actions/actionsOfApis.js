import { API_AUTH_LOGIN_URL, API_DESCENDING_PRODUCTS_URL, API_ELECTRONIC_PRODUCTS_URL, API_JEWELERY_PRODUCTS_URL, API_LIMITS_PRODUCTS_URL, API_MANS_PRODUCTS_URL, API_PODUCTS_URL, API_SINGLE_PRODUCTS_URL, API_WOMENS_PRODUCTS_URL, Api_ADDNEW_PRODUCTS_URL } from "../../Config/Urls";
import { getProductsApi, getProductsAPILimtis, getProductsCategoriesOfElectronic, getProductsCategoriesOfJewelery, getProductsCategoriesOfMans, getProductsCategoriesOfWomens, getProductsDescendingApi, getSingleProducts, postApiAddNewProducts, PostLoginApi } from "../../utils/utils";
import store from "../store";
const getActionsProductsApi = (data) => {
    return getProductsApi(API_PODUCTS_URL, data, {})
};
const getActionsProductsLimitsApi = (data) => {
    return getProductsAPILimtis(API_LIMITS_PRODUCTS_URL, data, {})
};
const getActionProductsDescendingApi = (data) => {
    return getProductsDescendingApi(API_DESCENDING_PRODUCTS_URL, data, {})
}
const getActionProductCategoriesOfElectronics = (data) => {
    return getProductsCategoriesOfElectronic(API_ELECTRONIC_PRODUCTS_URL, data, {})
};
const getActionProductCategoriesOfJewelery = (data) => {
    return getProductsCategoriesOfJewelery(API_JEWELERY_PRODUCTS_URL, data, {});
};
const getActionProductCategoriesOfMan = (data) => {
    return getProductsCategoriesOfMans(API_MANS_PRODUCTS_URL, data, {})
};
const getActionProductCategoriesOfWomen = (data) => {
    return getProductsCategoriesOfWomens(API_WOMENS_PRODUCTS_URL, data, {});
};
const getActionSingleProdcuts = (data) =>{
    return getSingleProducts(API_SINGLE_PRODUCTS_URL,data,{});
}
const postActionAddNewProducts = (data) => {
    return postActionAddNewProducts(data)
    // return new Promise((resolve, reject) => {
    //     postApiAddNewProducts(Api_ADDNEW_PRODUCTS_URL, data, {}).then((res) => {
    //         return resolve(res)
    //     }).catch((error) => {
    //         return reject(error)
    //     })
    // })
}

 const postActionLoginUser = (data) =>{
    return PostLoginApi(data);
    // return new Promise ((resolve, reject)=>{
    //     PostLoginApi(API_AUTH_LOGIN_URL,data,{}).then((res)=>{
    //         return resolve(res)
    //     }).catch((error)=>{
    //         return reject(error)
    //     })
    // });
 }
export default {
    getActionsProductsApi,
    getActionSingleProdcuts,
    getActionsProductsLimitsApi,
    getActionProductsDescendingApi,
    getActionProductCategoriesOfElectronics,
    getActionProductCategoriesOfJewelery,
    getActionProductCategoriesOfMan,
    getActionProductCategoriesOfWomen,
    postActionAddNewProducts,
    postActionLoginUser
}