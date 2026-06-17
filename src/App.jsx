import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DramaDetail from './pages/DramaDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drama/:id" element={<DramaDetail />} />
    </Routes>
  )
}

export default App