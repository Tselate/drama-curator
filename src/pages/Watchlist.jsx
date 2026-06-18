import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useWatchlist } from '../hooks/useWatchlist'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabaseClient'

function Watchlist() {
  const { user } = useAuth()
  const { watchlist, loading, removeFromWatchlist, updateStatus } = useWatchlist()
  const [dramas, setDramas] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/auth')
  }, [user])

  useEffect(() => {
    async function fetchDramas() {
      if (watchlist.length === 0) return
      const ids = watchlist.map(item => item.drama_id)
      const { data } = await supabase
        .from('dramas')
        .select('*')
        .in('id', ids)
      setDramas(data || [])
    }
    fetchDramas()
  }, [watchlist])

  const sections = [
    { status: 'watching', label: '👁 Watching' },
    { status: 'want_to_watch', label: '🔖 Want to Watch' },
    { status: 'completed', label: '✅ Completed' },
  ]

  function getDrama(dramaId) {
    return dramas.find(d => d.id === dramaId)
  }

  if (loading) return <p className="text-white p-6">Loading...</p>

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-8">My Watchlist</h2>
        {watchlist.length === 0 ? (
          <p className="text-gray-400">No dramas added yet. 
            <button onClick={() => navigate('/')} className="text-rose-400 ml-1 hover:text-rose-300">
              Browse dramas
            </button>
          </p>
        ) : (
          sections.map(section => {
            const items = watchlist.filter(item => item.status === section.status)
            if (items.length === 0) return null
            return (
              <div key={section.status} className="mb-10">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">{section.label}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {items.map(item => {
                    const drama = getDrama(item.drama_id)
                    if (!drama) return null
                    return (
                      <div key={item.drama_id} className="group cursor-pointer">
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={drama.poster_url}
                            alt={drama.title}
                            onClick={() => navigate(`/drama/${drama.id}`)}
                            className="w-full object-cover rounded-lg group-hover:scale-105 transition duration-300"
                          />
                        </div>
                        <p className="mt-2 text-xs text-gray-400 truncate">{drama.title} ({drama.year})</p>
                        <button
                          onClick={() => removeFromWatchlist(drama.id)}
                          className="text-xs text-red-400 hover:text-red-300 transition"
                        >
                          ✕ Remove
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })
        )}
      </main>
    </div>
  )
}

export default Watchlist