/**
 * This file is the entry point for the React application.
 * 
 * - It uses `createRoot` from the `react-dom/client` package to render the application into the DOM element with the ID "root".
 * - The `BrowserRouter` component from the `react-router-dom` package is used to wrap the `App` component.
 * 
 * ## Purpose of `BrowserRouter`:
 * - `BrowserRouter` enables client-side routing in the React application.
 * - It uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep the UI in sync with the URL.
 * - This allows the application to have multiple pages or views without requiring a full page reload.
 */


import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
