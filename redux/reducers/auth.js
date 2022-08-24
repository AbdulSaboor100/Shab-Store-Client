import { Types } from "../Types";

let initialStore = {
  success: false,
  status: "",
  user: {},
  token: "",
  error: "",
};

export default function (store = initialStore, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.AUTH_REGISTER:
    case Types.GET_CURRENT_USER:
      return {
        ...store,
        success: payload.success,
        status: payload.status,
        user: payload.user,
        token: payload.token,
      };
    case Types.AUTH_REGISTER_FAILED:
    case Types.GET_CURRENT_USER_FAILED:
      return {
        ...store,
        success: false,
        status: "",
        user: {},
        token: "",
        error: payload.error,
      };

    default:
      return store;
  }
}
