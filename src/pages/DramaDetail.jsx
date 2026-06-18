import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useDrama } from '../hooks/useDrama'
import { useWatchlist } from '../hooks/useWatchlist'
import { useAuth } from '../hooks/useAuth'

function DramaDetail() {
  const { id } = useParams()
  const { drama, loading, error } = useDrama(id)
  const { addToWatchlist, updateStatus, removeFromWatchlist, getStatus } = useWatchlist()
  const { user } = useAuth()
  const navigate = useNavigate()

  if (loading) return <p className="text-white p-6">Loading...</p>
  if (error) return <p className="text-red-500 p-6">Something went wrong.</p>

  const status = getStatus(drama.id)

  const statusOptions = [
    { value: 'watching', label: '👁 Watching' },
    { value: 'completed', label: '✅ Completed' },
    { value: 'want_to_watch', label: '🔖 Want to Watch' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 text-lg hover:text-white mb-6 transition"
        >
          ← Back
        </button>
        <div className="bg-gray-900 rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={drama.poster_url}
              alt={drama.title}
              className="w-88 rounded-lg self-start"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{drama.title}</h1>
              <div className="flex gap-4 text-base text-gray-400 mb-4">
                <span>{drama.year}</span>
                <span>⭐ {drama.rating}</span>
                <span>{drama.episode_count} episodes</span>
                <span>{drama.content_rating}</span>
              </div>
              <p className="text-gray-300 mb-4">{drama.synopsis}</p>
              <p className="text-base text-gray-400 mb-2">
                <span className="text-gray-200 font-semibold">Genres: </span>
                {drama.genre}
              </p>
              <p className="text-base text-gray-400 mb-2">
                <span className="text-gray-200 font-semibold">Cast: </span>
                {drama.cast}
              </p>
              <p className="text-base text-gray-400 mb-6">
                <span className="text-gray-200 font-semibold">Network: </span>
                {drama.network}
              </p>

              {user ? (
                <div>
                  <p className="text-base text-gray-400 mb-2 font-semibold">Add to Watchlist:</p>
                  <div className="flex flex-wrap gap-2">
                    {statusOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() =>
                          status === option.value
                            ? removeFromWatchlist(drama.id)
                            : status
                            ? updateStatus(drama.id, option.value)
                            : addToWatchlist(drama.id, option.value)
                        }
                        className={`px-4 py-2 rounded-lg text-base transition ${
                          status === option.value
                            ? 'bg-rose-500 text-white'
                            : 'bg-gray-800 text-gray-400 hover:text-white'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                    {status && (
                      <button
                        onClick={() => removeFromWatchlist(drama.id)}
                        className="px-4 py-2 rounded-lg text-base bg-gray-800 text-red-400 hover:text-red-300 transition"
                      >
                        ✕ Remove
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => navigate('/auth')}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg text-base transition"
                >
                  Sign in to add to Watchlist
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DramaDetail