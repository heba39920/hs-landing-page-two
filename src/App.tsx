
import { useEffect, useState } from "react"
import { Home } from "./Pages";
import { Loader, Masterlayout } from "./Components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
     const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading){
     return <Loader loading={loading}/>
  }
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Masterlayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "home", element: <Home /> },
        ],
      },
    ],
    {
      basename: "/hs-landing-page-two/",
    }
  );
  return <RouterProvider router={routes} />;
}

export default App;
