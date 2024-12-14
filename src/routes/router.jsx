import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/jobDetails/JobDetails";








const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "jobs/:id",
          element: <JobDetails></JobDetails>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
            path: "login",
            element: <Login></Login>
        }
      ]
    },
  ]);


  export default router;