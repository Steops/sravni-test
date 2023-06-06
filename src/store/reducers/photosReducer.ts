import {
  IPhotos,
  IStatePhotos,
  PhotosAction,
  PhotosActionTypes,
} from "../../types/photos";

const defaultState: IStatePhotos = {
  photos: [],
  loading: false,
  error: null,
};

export const photosReducer = (state = defaultState, action: PhotosAction) => {
  switch (action.type) {
    case PhotosActionTypes.FETCH_PHOTOS:
      return { loading: true, error: null, photos: [] };
    case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
      return { loading: false, error: null, photos: action.payload };
    case PhotosActionTypes.FETCH_PHOTOS_ERROR:
      return { loading: false, error: action.payload, photos: [] };
    default:
      return state;
  }
};

export const getPhotos = (photos: IPhotos) => {
  return { type: PhotosActionTypes.FETCH_PHOTOS, payload: photos };
};
