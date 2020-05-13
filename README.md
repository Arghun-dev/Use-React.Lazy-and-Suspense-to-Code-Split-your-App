# Use-React.Lazy-and-Suspense-to-Code-Split-your-App

What is lazy loading is: It's exactly what it sounds =>>>> **Instead of loading everything at the same time, You can load something asynchronously. a piece of a page asynchronously, So your page is rendered while other pieces are loading**

**If you notice, like if you have a table, and if you scroll down, some tables are lazy loads, the rest of the rows as you scroll.**

In order to use React.lazy you need to have React version: `16.6 or later` =>>>> always use `npx create-react-app`

Example:


```
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
```
