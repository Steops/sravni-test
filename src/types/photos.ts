export interface IPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IStatePhotos {
  photos: IPhotos[];
  loading: boolean;
  error: null | string;
}

export enum PhotosActionTypes {
  FETCH_PHOTOS = "FETCH_PHOTOS",
  FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS",
  FETCH_PHOTOS_ERROR = "FETCH_PHOTOS_ERROR",
}

export interface FetchPhotosAction {
  type: PhotosActionTypes.FETCH_PHOTOS;
}

export interface FetchUsersSuccessAction {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS;
  payload: IPhotos[];
}

export interface FetchUsersErrorAction {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR;
  payload: string;
}

export type PhotosAction =
  | FetchPhotosAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
