import { useState } from 'react'
import Header from '../components/Header'
import DramaGrid from '../components/DramaGrid'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import { useDramas } from '../hooks/useDramas'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const { dramas, loading, error, hasMore, loadMore, resetPage } = useDramas(searchQuery, selectedGenre)

  function handleSearchChange(value) {
    resetPage()
    setSearchQuery(value)
  }

  function handleGenreChange(value) {
    resetPage()
    setSelectedGenre(value)
  }

  if (error) return <p className="text-red-500 p-6">Something went wrong.</p>

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-200">Popular Dramas</h2>
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <FilterBar selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
        {loading && dramas.length === 0 ? (
          <p className="text-gray-400">Loading dramas...</p>
        ) : (
          <>
            <DramaGrid dramas={dramas} />
            {hasMore && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="bg-gray-800 hover:bg-rose-500 text-white px-6 py-2 rounded-lg transition disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}

export default Home