function SearchBar({ value, onChange }) {
    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Search..."
                value={value}
                onChange={e => onChange(e.target.value)}
                className="w-full md:w-96 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-rose-500 transition"
            />
        </div>
    );
}

export default SearchBar