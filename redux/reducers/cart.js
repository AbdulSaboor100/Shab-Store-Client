import { Types } from "../Types";

let initialState = {
  cartVal: false,
  success: false,
  status: "",
  products: [],
};

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        status: "Product added successfully",
        products: payload,
      };

    case Types.REMOVE_PRODUCT_TO_CART:
      return {
        ...state,
        status: "Product remove successfully",
        products: payload,
      };

    case Types.CART_OPEN:
      return {
        ...state,
        success: true,
        cartVal: true,
      };

    case Types.CART_CLOSED:
      return {
        ...state,
        success: true,
        cartVal: false,
      };

    default:
      return state;
  }
}
