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

As you can see, we used `Suspense`, If would not use Suspense, our app does not work, it is because, when you lazy load something, it won't be available right away.

What we are doing by wrapping our Components with Suspense. We are making our components to load asynchronously.

### What that means?

It means, whenever it loads these components => `<Description> and <Cast />` until then do something else.

But I need to provide something here, If I am providing Suspense, it has to have some fallback.


```
import React, { Suspense, lazy } from "react";
import "./App.css";

// Component
const Description = lazy(() => import("./Description"));
const Cast = lazy(() => import("./Cast"));

// Loader Component
import Loader from "./Loader";

function App() {
  return (
    <div>
      <h1>React: A Movie</h1>
      <Suspense fallback={<Loader />}>
        <Description />
        <Cast />
      </Suspense>
    </div>
  );
}

export default App;
```


VERRRRRYYYYYY COOL!!!!!!!!!!!!!
