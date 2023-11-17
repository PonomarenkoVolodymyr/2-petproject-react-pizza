import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'; // react lazy

// React Lodable with server render:
import Loadable from 'react-loadable';

// React Lodable with server render

import Home from './pages/Home';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader';

// const Cart = lazy(() => import(/*webpackChunkName:"Cart"*/ './pages/Cart'));

const Cart = Loadable({
  loader: () => import(/*webpackChunkName:"Cart"*/ './pages/Cart'),
  loading: () => <Loader />,
});

const FullPizza = lazy(
  () => import(/*webpackChunkName:"FullPizza"*/ './pages/FullPizza')
);

const NotFound = lazy(
  () => import(/*webpackChunkName:"NotFound"*/ './pages/NotFound')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<Loader />}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
