import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useDrama } from "../hooks/useDrama";

function DramaDetail() {
  const { id } = useParams();
  const { drama, loading, error } = useDrama(id);
  const navigate = useNavigate();

  if (loading) return <p className="text-white p-6">Loading...</p>;
  if (error) return <p className="text-red-500 p-6">Something went wrong.</p>;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-white mb-6 transition"
        >
          ← Back
        </button>
        <div className="bg-gray-900 rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={drama.poster_url}
              alt={drama.title}
              className="w-48 rounded-lg self-start"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {drama.title} ({drama.year})
              </h1>
              <div className="flex gap-4 text-sm text-gray-400 mb-4">
                <span>⭐ {drama.rating}</span>
                <span>{drama.episode_count}</span>
                <span>{drama.content_rating}</span>
              </div>
              <p className="text-gray-300 mb-4">{drama.synopsis}</p>
              <p className="text-sm text-gray-400 mb-2">
                <span className="text-gray-200 font-semibold">Genres: </span>
                {drama.genre}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <span className="text-gray-200 font-semibold">Cast: </span>
                {drama.cast}
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-gray-200 font-semibold">Network: </span>
                {drama.network}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DramaDetail;