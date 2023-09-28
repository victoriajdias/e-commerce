import React from "react";
import { Route, Routes as RoutesDom } from "react-router-dom"

import Home from "./Home"
import About from "./Sobre"
import User from "./Usuario"
import Produtos from "./Produtos"



const Routes = () => {
  return (
      <RoutesDom>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user" element={<User />} />
        <Route path="Produtos" element={<Produtos />} />

        
      </RoutesDom>
  )
}

export default Routes