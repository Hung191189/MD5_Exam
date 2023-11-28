import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./page/home";
import Navbar from "./components/navbar";
import View from "./page/view";
import Edit from "./page/edit";
import Create from "./page/create";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path={"/"} element={<Navbar></Navbar>}>
            <Route path={"/home"} element={<Home></Home>}></Route>
            <Route path={"/view/:id"} element={<View></View>}></Route>
            <Route path={"/edit/:id"} element={<Edit></Edit>}></Route>
            <Route path={"/create"} element={<Create></Create>}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
