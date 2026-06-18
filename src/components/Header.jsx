import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../hooks/useAuth'

function Header() {
  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1
          onClick={() => navigate('/')}
          className="text-rose-500 text-2xl font-bold tracking-wide cursor-pointer"
        >
          DramaList
        </h1>
        <nav className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">Dramas</a>
          {user ? (
            <>
              <a href="#" className="hover:text-white transition">Watchlist</a>
              <button
                onClick={handleSignOut}
                className="hover:text-white transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate('/auth')}
              className="hover:text-white transition"
            >
              Sign In
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header