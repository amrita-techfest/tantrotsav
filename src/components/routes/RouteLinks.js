import { Route, Routes } from "react-router-dom";
import Main from "../events/main.js"
import Home from "../Home"

import React from 'react'

const RouteLinks = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Main />} />
    </Routes>
  )
}

export default RouteLinks