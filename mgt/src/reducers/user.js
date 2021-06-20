import { UPDATE_PASSWORD } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PASSWORD:
      return { password: payload };

    default:
      return state;
  }
}