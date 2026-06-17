import { useNavigate } from 'react-router-dom'

function DramaCard({ drama }) {
  const navigate = useNavigate()

  return (
    <div
      className="group cursor-pointer"
      onClick={() => navigate(`/drama/${drama.id}`)}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={drama.poster_url}
          alt={drama.title}
          className="w-full object-cover rounded-lg group-hover:scale-105 transition duration-300"
        />
      </div>
      <p className="mt-2 text-xs text-gray-400 truncate">{drama.title}</p>
      <p className="text-xs text-rose-400">⭐ {drama.rating}</p>
    </div>
  )
}

export default DramaCard