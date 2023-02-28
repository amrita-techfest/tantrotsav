import { Route, Routes } from "react-router-dom";

import React from 'react'

const RouteLinks = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default RouteLinks