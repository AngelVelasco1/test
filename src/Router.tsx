import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView } from './views/HomeView'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
