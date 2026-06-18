function SearchBar({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search dramas..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 text-base focus:outline-none focus:border-rose-500 transition w-72"
      />
    </div>
  )
}

export default SearchBar