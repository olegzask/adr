import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { BooleanProvider } from "./store";
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(
//   <BrowserRouter>
//     <BooleanProvider>
//       <App />
//     </BooleanProvider>
//   </BrowserRouter>
// );

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
    <BooleanProvider>
      <App />
    </BooleanProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
