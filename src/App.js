import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    const title = document.querySelector(".title");
    title.textContent = `Count ${count}`;
  }, [count]);

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">Count: ({count})</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
        <button onClick={handleClick}>Inctement count</button>
      </div>
    </div>
  );
}

export default App;
