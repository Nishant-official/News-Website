import React from "react";
import { NewsContextProvider } from "./NewsContext";
import AllNews from "./AllNews";
import "./App.css";

function App() {
  return (
    <NewsContextProvider>
      <AllNews />
    </NewsContextProvider>
  );
}

export default App;
