import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import Error from './pages/Error';
import ProductsDetails from './pages/ProductsDetails';
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route
//       path='/'
//       element={<Home />}
//     ></Route>
//     <Route
//       path='/products'
//       element={<Products />}
//     ></Route>
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductsDetails /> },
    ],
    errorElement: <Error />,
  },
]);
// const router = createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
