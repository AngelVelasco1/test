import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from './views/HomeView';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

