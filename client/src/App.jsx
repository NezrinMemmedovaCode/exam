import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Basket from "./Pages/Basket/Basket";
import WishList from "./Pages/WishList/WishList";
import Add from "./Pages/Add/Add";
import Detail from "./Pages/Detail/Detail";
import Admin from "./Pages/Admin/Admin";
import { HelmetProvider } from "react-helmet-async";
import MainProvider from "./context/MainProvider";

function App() {

  return (
    <>
    <MainProvider>

    
<HelmetProvider>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="WishList" element={<WishList />} />
          <Route path="Add" element={<Add />} />
          <Route path="Detail/:id" element={<Detail />} />
          <Route path="Admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </MainProvider>
     
    </>
  )
}

export default App
