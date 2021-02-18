# Use-React.Lazy-and-Suspense-to-Code-Split-your-App

Code Splitting allows you to split out pieces of your application. so that you differ the loader to later, the first load is really quick

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


## Route-based code splitting

Deciding where in your app to introduce code splitting can be a bit tricky. You want to make sure you choose places that will split bundles evenly, but won’t disrupt the user experience.

A good place to start is with routes. Most people on the web are used to page transitions taking some amount of time to load. You also tend to be re-rendering the entire page at once so your users are unlikely to be interacting with other elements on the page at the same time.

Here’s an example of how to setup route-based code splitting into your app using libraries like

```js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);
```

for example imagine you have another component called `Details.js`, I want to differ the loading of the `Details` into later

```js
const Details = lazy(() => import('./Details'))
```

So now what is Details, now `Details` now is a placeholder component that will not load this code until later, when `Details` actually try to render for the first time
Notice, that this is really important you should import the component just like this:
```js
const Details = lazy(() => import('./Details'))
```

```js
<Suspense fallback={<div>loading route...</div>}>
  <Router>
    <SearchParams path="/" />
    <Details path="/details/:id" />
  </Router>
</Suspense>
```

### Code Splitting Libraries and Child Components

**Libraries**

for example imagine you have imported some really big libraries in `Details` component if you don't use React.lazy, to split your code, And then if you go and check the `Network => JS` tab, you will see that the bundle size of your app will be so high for example it would be around `800kb`, But if you use code splitting, you will see the `magic` that your component bundle size will be decreased dramatically. And this is great.


**Components**

for example you have a `Modal` component which you have been imported to use it, actually you don't need `Modal` untile you click to open `Modal` so, instead of importing `Modal` just like below:

```js
import Modal from './Modal'
```

import `Modal` just like this

```js
const Modal = lazy(() => import('./Modal'))
```

Because as we know the `Modal` not initially used, the `Modal` is only used if the `showModal` state happens

```js
{
  showModal && <Modal />
}
```
