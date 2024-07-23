import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { LoginForm,Shop, ProductPage, ShoppingCart, CustomMessagePage} from "../pages/index";
import ProtectedRoute from "../components/Login/ProtectedRoute";


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
                element: <CustomMessagePage />
            }

        ]
    }
], { basename });