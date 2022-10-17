import { useReducer } from "react";
import { formReducer, FORM_INITIAL_STATE } from "../reducers/formReducer";

export const useUserFormReducer = () => {
  return useReducer(formReducer, FORM_INITIAL_STATE);
};
