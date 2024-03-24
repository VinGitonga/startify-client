import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/login";
import Signup from "./pages/signup";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "",
		element: <AuthLayout />,
		children: [
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Signup />,
			},
		],
	},
]);

export default router;
