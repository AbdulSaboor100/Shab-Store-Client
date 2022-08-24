import { Types } from "../Types";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { setAlert } from "./alert";

export const userSignUpCustom =
  (formData, setLoading, router) => async (dispatch) => {
    setLoading(true);
    try {
      let response = await axios.post(
        `${BASE_URL}/api/auth/register`,
        formData
      );
      dispatch({ type: Types.AUTH_REGISTER, payload: response?.data });
      dispatch(
        setAlert({
          type: "success",
          message: response?.data?.status,
          time: 1000,
        })
      );
      localStorage.setItem("token", response?.data?.token);
      setLoading(false);
      router.push("/");
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
            time: 1000,
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
            time: 1000,
          })
        );
      }
      console.log(error);
    }
  };

export const uploadFile = (file, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    let formBody = new FormData();
    formBody.append("image", file);
    let response = await axios.post(
      `${BASE_URL}/api/auth/upload-images`,
      formBody
    );
    dispatch(
      setAlert({ type: "success", message: response?.data?.status, time: 1000 })
    );
    setLoading(false);
    return response?.data?.file[0]?.url;
  } catch (error) {
    setLoading(false);
    if (error?.response?.data) {
      dispatch(
        setAlert({
          type: "error",
          message: error?.response?.data?.status,
          time: 1000,
        })
      );
    } else {
      dispatch(
        setAlert({
          type: "error",
          message: error?.message,
          time: 1000,
        })
      );
    }
    console.log(error);
  }
};
