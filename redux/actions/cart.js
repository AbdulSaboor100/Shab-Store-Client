import { Types } from "../Types";
import { setAlert } from "./alert";

export const addProductToCart =
  (product, allCartProducts) => async (dispatch) => {
    let productArr = allCartProducts;

    const isHave = productArr?.filter((item, i) => item?._id === product?._id);

    const filteredArr = productArr?.map((item, i) => {
      if (item?._id === product?._id) {
        return { ...item, totalitems: item.totalitems + 1 };
      }
      return item;
    });
    if (isHave[0]) {
      productArr = filteredArr;
    } else {
      productArr.push(product);
    }
    dispatch({ type: Types.ADD_PRODUCT_TO_CART, payload: productArr });
  };

export const cancelProductToCart =
  (product, allCartProducts) => async (dispatch) => {
    let productArr = allCartProducts;

    const isHave = productArr?.filter((item, i) => item?._id === product?._id);

    const filteredArr = productArr?.map((item, i) => {
      if (item?._id === product?._id) {
        return {
          ...item,
          totalitems: item.totalitems > 0 ? item.totalitems - 1 : 0,
        };
      }
      return item;
    });
    if (isHave[0]) {
      productArr = filteredArr;
    } else {
      productArr.push(product);
    }
    dispatch({ type: Types.ADD_PRODUCT_TO_CART, payload: productArr });
  };

export const removeProductToCart =
  (product, allCartProducts) => async (dispatch) => {
    let filteredArr = allCartProducts?.filter(
      (item, i) => item._id !== product._id
    );
    dispatch({ type: Types.ADD_PRODUCT_TO_CART, payload: filteredArr });
  };

export const cartOpen = () => (dispatch) => {
  dispatch({ type: Types.CART_OPEN });
};

export const cartClosed = () => (dispatch) => {
  dispatch({ type: Types.CART_CLOSED });
};
