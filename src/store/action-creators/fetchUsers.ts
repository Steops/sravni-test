import { AppDispatch } from "./../store";
import { UserActionTypes } from "../../types/users";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(`${process.env.REACT_APP_URL}/users`);
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};
