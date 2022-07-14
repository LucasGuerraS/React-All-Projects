import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoOutput from "./components/demo/DemoOutput.js";
import Button from "./components/UI/Button/Button.js";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoOutput title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
