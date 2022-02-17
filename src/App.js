import React from "react";
import {Routes, Route} from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default App;
