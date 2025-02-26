import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Layout from "./Layout "; 
import MyList from "./MyList";
import Error from "./Error";
import React, { lazy,Suspense } from "react";

const Shows = lazy(() => import("./Shows"));
const AllMovies = lazy(() => import("./AllMovies"));
const NewHot = lazy(() => import("./NewHot"));
const Vdesi = lazy(() => import("./Vdesi"));
const Trailer = lazy(() => import("./Trailer"));

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/> 
    },
    {
      path: "/",
      element: <Layout />, 
      children: [
        {
          path: "/browse",
          element: <Browse />
        },
        {
          path: "/shows",
          element: (
            <Suspense fallback={<h1 className="text-[#1279FF] font-bold text-3xl mt-28 sm:mt-32 md:mt-12 ml-20">Loading...</h1>}>
              <Shows />
            </Suspense>
          )
        },
        {
          path: "/allmovies",
          element: (
            <Suspense fallback={<h1 className="text-[#1279FF] font-bold text-3xl mt-28 sm:mt-32 md:mt-12 ml-20">Loading...</h1>}>
              <AllMovies />
            </Suspense>
          )
        },
        {
          path: "/newhot",
          element:  (
            <Suspense fallback={<h1 className="text-[#1279FF] font-bold text-3xl mt-28 sm:mt-32 md:mt-12 ml-20">Loading...</h1>}>
              <NewHot />
            </Suspense>
          )
        },
        {
          path: "/vdesi",
          element:  (
            <Suspense fallback={<h1 className="text-[#1279FF] font-bold text-3xl mt-28 sm:mt-32 md:mt-12 ml-20">Loading...</h1>}>
              <Vdesi />
            </Suspense>
          )
        },
        {
          path: "/trailer",
          element: (
            <Suspense fallback={<h1 className="text-[#1279FF] font-bold text-3xl mt-28 sm:mt-32 md:mt-12 ml-20">Loading...</h1>}>
              <Trailer />
            </Suspense>
          )
        },
        {
          path: "/myList",
          element: <MyList/>
        },
        {
          path: "/error",
          element: <Error/>
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
