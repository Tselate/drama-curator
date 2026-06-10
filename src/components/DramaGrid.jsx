import DramaCard from './DramaCard'

function DramaGrid({ dramas }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {dramas.map(drama => (
        <DramaCard key={drama.id} drama={drama} />
      ))}
    </div>
  )
}

export default DramaGrid