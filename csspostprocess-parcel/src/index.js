import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <>
      <h1>Welcome to the</h1>
      <div className="title">
        <h1>Webpack Example</h1>
      </div>
    </>
  );
}
const domNode = document.getElementById("app");
const root = createRoot(domNode);

root.render(<App />);
