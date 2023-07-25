import axios from "axios";
import { API_DESCENDING_PRODUCTS_URL, API_ELECTRONIC_PRODUCTS_URL, API_JEWELERY_PRODUCTS_URL, API_LIMITS_PRODUCTS_URL, API_MANS_PRODUCTS_URL, API_PODUCTS_URL, API_SINGLE_PRODUCTS_URL, API_WOMENS_PRODUCTS_URL, Api_ADDNEW_PRODUCTS_URL } from "../Config/Urls";
const axiosApiRequset = (endpoint, method, header, data) => {
    return new Promise((resolve, reject) => {
        axios({
            url: endpoint,
            method: method,
            headers: header,
            data: data,
        }).then((res) => {
            return resolve(res.data)
        }).catch((error) => {
            return reject(error)
        })
    })
};
export const getProductsApi = () => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(API_PODUCTS_URL, "get").then((res) => {
            return resolve(res)
        }).catch((error) => {
            return reject(error)
        })
    })
};
export const getProductsAPILimtis = () => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(API_LIMITS_PRODUCTS_URL, "get").then((response) => {
            return resolve(response)
        }).catch((error) => {
            return reject(error)
        });
    })
};
export const getProductsDescendingApi = () => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(API_DESCENDING_PRODUCTS_URL, "get").then((response) => {
            return resolve(response)
        }).catch((error) => {
            return reject(error)
        });
    });
};
export const getProductsCategoriesOfElectronic = () => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(API_ELECTRONIC_PRODUCTS_URL, "get").then((response) => {
            return resolve(response)
        }).catch((error) => {
            return reject(error)
        })
    })
};
export const getProductsCategoriesOfMans = () => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(API_MANS_PRODUCTS_URL, "get").then((response) => {
            return resolve(response)
        }).catch((error) => {
            return reject(error)
        })
    })
};
export const getProductsCategoriesOfWomens = () => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(API_WOMENS_PRODUCTS_URL, "get").then((response) => {
            return resolve(response)
        }).catch((error) => {
            return reject(error)
        });
    });
};
export const getProductsCategoriesOfJewelery = () => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(API_JEWELERY_PRODUCTS_URL, "get").then((response) => {
            return resolve(response)
        }).catch((error) => {
            return reject(error)
        });
    });
};
export const getSingleProducts = () => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(API_SINGLE_PRODUCTS_URL, "get").then((response) => {
            return resolve(response)
        }).catch((error) => {
            return reject(error)
        });
    });
};
export const postApiAddNewProducts = () => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(Api_ADDNEW_PRODUCTS_URL, "post").then((res) => {
            return resolve(res)
        }).catch((error) => {
            return reject(error)
        })
    })
};     