import { useEffect, useReducer, useRef } from "react";
import { debounce } from "../../helpers/debounce";

const DEBOUNCE_THRESHOLD = 300;

const initialState = {
  items: [],
  isLoading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        items: action.payload.items,
        isLoading: false,
        error: null,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return new Error(
        `Invalid action type "${action.type}" was passed reducer`,
      );
  }
};

const useGetItems = ({ getItems, inputValue }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const debouncedFn = useRef();

  useEffect(() => {
    if (debouncedFn.current) debouncedFn.current.clear();

    if (!state.isLoading) {
      dispatch({
        type: "LOADING",
      });
    }

    debouncedFn.current = debounce(async () => {
      try {
        const items = await getItems(inputValue);

        dispatch({
          type: "SUCCESS",
          payload: {
            items,
          },
        });
      } catch (error) {
        console.error(error);

        dispatch({
          type: "ERROR",
          payload: {
            error,
          },
        });
      }
    }, DEBOUNCE_THRESHOLD);

    debouncedFn.current();
  }, [getItems, inputValue]);

  return state;
};

export { useGetItems };
