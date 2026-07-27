import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Home from "./pages/Home";
import Admin from "./pages/Admin";


import routes from "./constants/routes";


function App(){

  return (

    <BrowserRouter>

      <Routes>


        <Route
          path={routes.HOME}
          element={<Home />}
        />


        <Route
          path={routes.ADMIN}
          element={<Admin />}
        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;