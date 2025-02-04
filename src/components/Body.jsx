import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Shows from "./Shows";
import Layout from "./Layout "; 
import Movies from "./Movies";
import NewHot from "./NewHot";
import Vdesi from "./Vdesi";
import Trailer from "./Trailer";

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
          element: <Shows />
        },
        {
          path: "/movies",
          element: <Movies />
        },
        {
          path: "/newhot",
          element: <NewHot/>
        },
        {
          path: "/vdesi",
          element: <Vdesi/>
        },
        {
          path: "/tailer",
          element: <Trailer/>
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
