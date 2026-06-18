import { useState } from 'react'
import Header from '../components/Header'
import DramaGrid from '../components/DramaGrid'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import { useDramas } from '../hooks/useDramas'
import SkeletonGrid from '../components/SkeletonGrid'

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
      {/* HERO */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Discover Your Next <span className="text-rose-500">Obsession</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Track, discover and explore the best Korean, Turkish, Japanese and Chinese dramas — all in one place.
        </p>
      </div>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-2xl mb-2 ml-1 font-semibold text-gray-200">Popular Dramas</h2>
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
        </div>
        <FilterBar selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
        {loading && dramas.length === 0 ? (
          <SkeletonGrid />
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