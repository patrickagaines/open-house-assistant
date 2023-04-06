import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AuthenticationProvider } from "./components/authentication/AuthenticationProvider";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
