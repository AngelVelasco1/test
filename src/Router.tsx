import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView } from './views/HomeView'
import { AutorsView } from './views/AutorsView'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/autors" element={<AutorsView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
