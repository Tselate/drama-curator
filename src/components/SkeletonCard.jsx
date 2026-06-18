function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-800 rounded-lg w-full h-64" />
      <div className="mt-2 bg-gray-800 rounded h-3 w-3/4" />
      <div className="mt-1 bg-gray-800 rounded h-3 w-1/4" />
    </div>
  )
}

export default SkeletonCard