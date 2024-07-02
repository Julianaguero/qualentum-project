import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "../pages/Shop";
import ProtectedRoute from "../components/ProtectedRoute";
import ProductPage from "../pages/ProductPage";
import LoginForm from "../components/Login/LoginForm";
import ShoppingCart from "../pages/ShoppingCart";
import ErrorPage from "../pages/ErrorPage";

const basename = process.env.NODE_ENV === "production" ? "/qualentum-project" : "/";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Shop />,
            },
            {
                path: "/product/:productId",
                element: (
                    <ProtectedRoute>
                        <ProductPage />
                    </ProtectedRoute>
                )
            },
            {
                path: "/login",
                element: <LoginForm />
            },
            {
                path: "/cart",
                element: (
                    <ProtectedRoute>
                        <ShoppingCart />
                    </ProtectedRoute>
                )
            },
            {
                path: "/*",
                element: <ErrorPage />
            }

        ]
    }
], { basename });