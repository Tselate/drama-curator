import { useState } from 'react'
import Header from '../components/Header'
import DramaGrid from '../components/DramaGrid'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import { useDramas } from '../hooks/useDramas'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const { dramas, loading, error } = useDramas(searchQuery, selectedGenre)

  if (error) return <p className="text-red-500 p-6">Something went wrong.</p>

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-200">Popular Dramas</h2>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterBar selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <DramaGrid dramas={dramas} />
        )}
      </main>
    </div>
  )
}

export default Home