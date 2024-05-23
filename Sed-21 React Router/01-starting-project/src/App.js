import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> }, //path:''
      { path: "/products", element: <ProductPage /> },
      { path: '/products/:productId', element:<ProductDetailsPage/> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// For this project install React-router-dom
