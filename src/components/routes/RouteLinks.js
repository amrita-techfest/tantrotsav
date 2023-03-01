import { Route, Routes } from "react-router-dom";
import Main from "../events/main.js"
import Home from "../Home"
import Register from "../auth/register.js"

import React from 'react'

const RouteLinks = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleDeatils" element={<Main />} />
        <Route path="/register" element={<Register />} />

    </Routes>
  )
}

export default RouteLinks