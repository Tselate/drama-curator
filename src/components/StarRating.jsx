function StarRating({ rating, onRate }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="flex gap-1">
      {stars.map(star => (
        <button
          key={star}
          onClick={() => onRate(star)}
          className={`text-2xl transition ${
            star <= rating ? 'text-rose-500' : 'text-gray-700 hover:text-gray-500'
          }`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default StarRating