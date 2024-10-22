import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Singup from "./pages/Singup";
import store from "./store";
import Account from "./ui/Account";
import AppLayout from "./ui/AppLayout";
import LoginRoute from "./ui/LoginRoute";
import ProtectedRoute from "./ui/ProtectedRoute";
import Spinner from "./ui/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Recipe = lazy(() => import("./pages/Recipe"));
const CartForm = lazy(() => import("./features/cart/CartForm"));
const Cart = lazy(() => import("./pages/Cart"));
const Categorie = lazy(() => import("./pages/Categorie"));
const History = lazy(() => import("./ui/History"));

const clientQuery = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: (
      <LoginRoute>
        <Account></Account>
      </LoginRoute>
    ),
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/singup",
        element: <Singup></Singup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <AppLayout></AppLayout>
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/categorie/:name",
        element: <Categorie></Categorie>,
      },
      {
        path: "/product/:item",
        element: <Product></Product>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/cartform",
        element: <CartForm></CartForm>,
      },
      {
        path: "/recipe/:id",
        element: <Recipe></Recipe>,
      },
      {
        path: "/history/:id",
        element: <History></History>,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner></Spinner>}>
        <QueryClientProvider client={clientQuery}>
          <RouterProvider router={router}></RouterProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },

              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                background: "#363636",
                color: "#fff",
              },
            }}
          ></Toaster>
        </QueryClientProvider>
      </Suspense>
    </Provider>
  );
}

export default App;
