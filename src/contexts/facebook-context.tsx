import { createContext } from "react";

const FacebookContext = createContext<any>({});

export const FacebookProvider = FacebookContext.Provider;
export const FacebookConsumer = FacebookContext.Consumer;
export default FacebookContext;