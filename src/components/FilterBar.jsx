const GENRES = ['Romance', 'Thriller', 'Comedy', 'Action', 'Historical', 'Mystery', 'Drama', 'Life', 'Fantasy', 'Psychological']

function FilterBar({ selectedGenre, onGenreChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onGenreChange('')}
        className={`px-3 py-1 rounded-full text-base transition ${
          selectedGenre === ''
            ? 'bg-rose-500 text-white'
            : 'bg-gray-800 text-gray-400 hover:text-white'
        }`}
      >
        All
      </button>
      {GENRES.map(genre => (
        <button
          key={genre}
          onClick={() => onGenreChange(genre)}
          className={`px-3 py-1 rounded-full text-base transition ${
            selectedGenre === genre
              ? 'bg-rose-500 text-white'
              : 'bg-gray-800 text-gray-400 hover:text-white'
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}

export default FilterBar