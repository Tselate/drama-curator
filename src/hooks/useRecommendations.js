import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useRecommendations(drama) {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!drama) return

    async function fetchRecommendations() {
      setLoading(true)

      const firstGenre = drama.genre.split(',')[0].trim()

      const { data, error } = await supabase
        .from('dramas')
        .select('*')
        .ilike('genre', `%${firstGenre}%`)
        .neq('id', drama.id)
        .order('rating', { ascending: false })
        .limit(12)

      if (error) console.error(error)
      else setRecommendations(data)
      setLoading(false)
    }

    fetchRecommendations()
  }, [drama])

  return { recommendations, loading }
}