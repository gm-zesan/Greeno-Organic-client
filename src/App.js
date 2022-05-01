import logo from "./logo.svg";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
function App() {
    return (
        <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
            <Toaster position="top-right" reverseOrder={true} />
        </div>
    );
}

export default App;
