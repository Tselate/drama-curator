import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DramaDetail from './pages/DramaDetail'
import Auth from './pages/Auth'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/drama/:id" element={<DramaDetail />} />
    </Routes>
  )
}

export default App