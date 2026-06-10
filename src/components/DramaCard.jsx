function DramaCard({ drama }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg">
        <img
          src={drama.poster_url}
          alt={drama.title}
          className="w-full object-cover rounded-lg group-hover:scale-105 transition duration-300"
        />
      </div>
      <p className="mt-2 text-xs text-white-400 truncate">{drama.title}</p>
      <p className="text-xs text-rose-400">⭐ {drama.rating}</p>
    </div>
  )
}

export default DramaCard