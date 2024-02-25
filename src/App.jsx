import Login from "./screens/Login";
import WhoAmI from "./screens/WhoAmI";
import Previously from "./screens/Previously";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./screens/Root";
import Skills from "./screens/Skills";
import Portfolio from "./screens/Portfolio";


 const router = createBrowserRouter([
    {path: "/", element: <RootLayout/>, children:[
      {path:"/", element:<WhoAmI />},
      {path:"/previously", element:<Previously />},
      {path:"/skills", element:<Skills />},
      {path:"/pf", element:<Portfolio />}
    ]}
 ]);




function App() {
  return <RouterProvider router={router} />
}

export default App;


/*
import Login from "./screens/Login";
import Home from "./screens/Home";
import Previously from "./screens/previously";
import { BrowserRouter as Router, Route, Link , Routes, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from "react-router-dom";

function App() {
 const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root/>}>
      <Route index element={<Login />}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Previously" element={<Previously/>}/>

    </Route>
  )
 );
  return (
    <div><RouterProvider router={router} /></div>
  );
}

const Root = () => {
  return(
    <>
      <div>
        <Link to="/">Login</Link>
        <Link to="/Home">Home</Link>
        <Link to="/Previously">Previously</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
*/