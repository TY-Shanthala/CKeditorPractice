import { Button } from "@mui/material";
import React, { useState } from "react";
import ModalContent from "./modal/ModalContent";
import "./modal/modalStyleComponent.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./mainSidebar/AppLayout";
import HeaderComponant from "./headder component/HeaderComponant";

function App() {
  return (
    <div>
      {/* <ModalContent /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* <Route index element={<ModalContent />} /> */}
            <Route path="/started" element={<ModalContent />} />
            <Route path="/calendar" element={<ModalContent />} />
            <Route path="/user" element={<ModalContent />} />
            <Route path="/order" element={<ModalContent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
