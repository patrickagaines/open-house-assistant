import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AuthenticationProvider } from "./components/authentication/AuthenticationProvider";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
