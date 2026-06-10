import Header from '../components/Header'
import DramaGrid from '../components/DramaGrid'
import { useDramas } from '../hooks/useDramas'

function Home() {
  const { dramas, loading, error } = useDramas()

  if (loading) return <p className="text-white p-6">Loading dramas...</p>
  if (error) return <p className="text-red-500 p-6">Something went wrong.</p>

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-200">Popular Dramas</h2>
        <DramaGrid dramas={dramas} />
      </main>
    </div>
  )
}

export default Home