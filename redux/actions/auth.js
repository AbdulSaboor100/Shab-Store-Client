import { Types } from "../Types";
import axios from "axios";
import { BASE_URL } from "../../config/config";

export const userSignUpCustom =
  ({ formData, setLoading }) =>
  async (dispatch) => {
    setLoading(true);
    try {
      let response = await axios.post(`${BASE_URL}`, formData);
      dispatch({ type: Types.AUTH_REGISTER, payload: response?.data });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.response?.data) {
        dispatch({
          type: Types.AUTH_REGISTER_FAILED,
          payload: error?.response?.data?.status,
        });
      } else {
        dispatch({
          type: Types.AUTH_REGISTER_FAILED,
          payload: error?.message,
        });
      }
      console.log(error);
    }
  };
