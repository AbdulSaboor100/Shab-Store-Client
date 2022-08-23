import { Types } from "../Types";
import { setAlert } from "./alert";

export const addProductToCart =
  ({ product, setLoading }) =>
  async (dispatch) => {
    setLoading(true);
    try {
      let response = await axios.post(`${BASE_URL}`, product);
      dispatch({ type: Types.AUTH_REGISTER, payload: response?.data });
      setLoading(false);
      dispatch(
        setAlert({
          type: "error",
          message: response?.data?.status,
          time: 2000,
        })
      );
    } catch (error) {
      setLoading(false);
      if (error?.response?.data) {
        dispatch({
          type: Types.AUTH_REGISTER_FAILED,
          payload: error?.response?.data?.status,
        });
        dispatch(
          setAlert({
            type: "error",
            message: error?.response?.data?.status,
            time: 2000,
          })
        );
      } else {
        dispatch({
          type: Types.AUTH_REGISTER_FAILED,
          payload: error?.message,
        });
        dispatch(
          setAlert({
            type: "error",
            message: error?.message,
            time: 2000,
          })
        );
      }
      console.log(error);
    }
  };
