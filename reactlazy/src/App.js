import React, { Suspense, lazy } from "react";
import "./App.css";

// Component
const Description = lazy(() => import("./Description"));
const Cast = lazy(() => import("./Cast"));

function App() {
  return (
    <div>
      <h1>React: A Movie</h1>
      <Suspense fallback={<div>loading...</div>}>
        <Description />
        <Cast />
      </Suspense>
    </div>
  );
}

export default App;
