import axios from "axios";
import { API_AUTH_LOGIN_URL, API_DESCENDING_PRODUCTS_URL, API_ELECTRONIC_PRODUCTS_URL, API_JEWELERY_PRODUCTS_URL, API_LIMITS_PRODUCTS_URL, API_MANS_PRODUCTS_URL, API_PODUCTS_URL, API_SINGLE_PRODUCTS_URL, API_WOMENS_PRODUCTS_URL, Api_ADDNEW_PRODUCTS_URL, Api_LOGIN_USER_URL } from "../Config/Urls";
import { getLoginStatus } from "../redux/reducer/stateChanging";
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
            console.log(error)
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
export const PostLoginApi = (data) => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(API_AUTH_LOGIN_URL, "post", {}, data).then((res) => {
            console.log('resp=======1231212', res)
            return resolve(res)
        }).catch((error) => {
            console.log(error, "The error")
            return reject(error)
        });
    });
};

export const GetAsync = async key => {
    let userData = await AsyncStorage.getItem(key);
    let allData = await JSON.parse(userData);
    if (allData) {
      appLoginStateStatus (true);
    }
  };
  export const AsyncSendData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log('error occured', e);
    }
  };
  export const AsyncRemoveData = async key => {
    try {
      await AsyncStorage.removeItem(key);
      datasend(false);
    } catch (e) {
      console.log('error occured', e);
    }
  };