import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { TimeManagerProvider } from "./store/contexts/TimeManagerContext.tsx";
import theme from "../themes/theme.ts";
import { AnimationProvider } from "./store/contexts/AnimationContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <TimeManagerProvider>
          <AnimationProvider>
            <App />
          </AnimationProvider>
        </TimeManagerProvider>
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
