import { AppDispatch } from "./../store";
import { PhotosActionTypes } from "./../../types/photos";
import axios from "axios";

export const fetchPhotos = (userID: string | number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: PhotosActionTypes.FETCH_PHOTOS });
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/photos?_&albumId=${userID}`
      );
      dispatch({
        type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};
