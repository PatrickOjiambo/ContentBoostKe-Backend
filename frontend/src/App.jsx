import HomePage from "./pages/homepage"
import Donate from "./pages/donate"

import { RouterProvider, createBrowserRouter, Route, Router, createRoutesFromElements } from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<HomePage/>} exact/>
<Route path="/donate" element={<Donate/>} exact/>
<Route/>
  )
);
function App() {

  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App
