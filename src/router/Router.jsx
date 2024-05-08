import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../LoginPage";
import NotfoundPage from "../NotfoundPage";
import MytodoPage from "../MytodoPage";

const router = createBrowserRouter([ 
   {path: "/", element: <LoginPage />},
    {path: "/mytodo", element: <MytodoPage />} ,
    {path: "*", element: <NotfoundPage />}
]);

function Router() {
    
  return (
    <RouterProvider router={router}/>
  ) 
}

export default Router
