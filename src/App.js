import "./App.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/RegisterLogin/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Registration from "./Pages/RegisterLogin/Registration/Registration";
import NoPage from "./Pages/NoPage/NoPage";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import ManageItem from "./Pages/ManageItem/ManageItem";
import MyItem from "./Pages/MyItem/MyItem";
import AddItem from "./Pages/AddItem/AddItem";
import RequireAuth from "./Pages/RegisterLogin/RequireAuth/RequireAuth";
function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route
                    path="/items"
                    element={
                        <RequireAuth>
                            <ManageItem></ManageItem>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/myitems"
                    element={
                        <RequireAuth>
                            <MyItem></MyItem>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/additem"
                    element={
                        <RequireAuth>
                            <AddItem></AddItem>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                    path="/register"
                    element={<Registration></Registration>}
                ></Route>
                <Route path="*" element={<NoPage></NoPage>}></Route>
            </Routes>
            <Toaster position="top-right" reverseOrder={true} />
            <Footer></Footer>
        </div>
    );
}

export default App;
