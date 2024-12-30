import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyAddedJob from "../pages/myAddedJobs/MyAddedJob";
import AllJob from "../pages/AllJob/AllJob";
import ViewApplications from "../pages/viewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "jobs/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-iota-plum.vercel.app/jobs/${params.id}`
          ),
      },
      {
        path: "allJob",
        element: <AllJob></AllJob>,
      },
      {
        path: "addJob",
        element: (
          <PrivetRoute>
            <AddJob></AddJob>
          </PrivetRoute>
        ),
      },
      {
        path: "myAddedJobs",
        element: (
          <PrivetRoute>
            <MyAddedJob></MyAddedJob>
          </PrivetRoute>
        ),
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivetRoute>
            <JobApply></JobApply>
          </PrivetRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivetRoute>
            <MyApplications></MyApplications>
          </PrivetRoute>
        ),
      },
      {
        path: "viewApplications/:job_id",
        element: (
          <PrivetRoute>
            <ViewApplications></ViewApplications>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-iota-plum.vercel.app/job-applications/jobs/${params.job_id}`
          ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
