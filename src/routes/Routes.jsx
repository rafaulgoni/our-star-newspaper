import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Error from "../components/Error";
import LogIn from "../components/login/LogIn";
import Register from "../components/register/Register";
import News from "../pages/News";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('/news.json'),
        },
        {
          path:'/news/:id',
          element: <PrivateRoute><News></News></PrivateRoute>
        },
        {
            path:'/login',
            element: <LogIn></LogIn>,
        },
        {
            path:'/register',
            element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router;