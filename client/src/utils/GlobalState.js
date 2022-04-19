import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

// instantiate the global state object
// when we run the createContext function, it creates a new Context object
const StoreContext = createContext();
// every Context object comes with a Provider and Consumer
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: "",
  });
  // use this to confirm it works!
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
