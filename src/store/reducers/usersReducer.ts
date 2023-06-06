import {
  IStateUsers,
  IUsers,
  UserAction,
  UserActionTypes,
} from "../../types/users";

const defaultState: IStateUsers = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = (state = defaultState, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        loading: true,
        error: null,
        users: [...state.users],
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        users: action.payload,
      };
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
        users: [...state.users],
      };
    default:
      return state;
  }
};

export const getUsers = (users: IUsers) => {
  return { type: UserActionTypes.FETCH_USERS, payload: users };
};
