import { User } from "../interfaces/User";

type FormReducerAction =
  | {
      type: "MODIFY_FIELD";
      payload: {
        inputName: string;
        inputValue: string | boolean;
      };
    }
  | { type: "CLEAR_FORM" };

export const FORM_INITIAL_STATE = {
  name: "",
  active: false,
  since: "",
};

export const formReducer = (state: User, action: FormReducerAction) => {
  switch (action.type) {
    case "MODIFY_FIELD":
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue,
      };
    case "CLEAR_FORM":
      return FORM_INITIAL_STATE;
  }
};
