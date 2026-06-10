function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-rose-500 text-2xl font-bold tracking-wide">DramaList</h1>
        <nav className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">Dramas</a>
          <a href="#" className="hover:text-white transition">Watchlist</a>
          <a href="#" className="hover:text-white transition">Sign In</a>
        </nav>
      </div>
    </header>
  )
}

export default Header