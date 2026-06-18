import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DramaDetail from './pages/DramaDetail'
import Auth from './pages/Auth'
import Watchlist from './pages/Watchlist'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drama/:id" element={<DramaDetail />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
  )
}

export default App