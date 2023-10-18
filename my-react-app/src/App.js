import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./pages/MyMain/MyMain";
import MyLogin from "./pages/MyLogin/MyLogin";
import MyRegister from "./pages/MyRegister/MyRegister";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/login" element={<MyLogin />} />
          <Route path="/register" element={<MyRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
