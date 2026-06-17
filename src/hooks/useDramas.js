import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useDramas(searchQuery = '') {
  const [dramas, setDramas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDramas() {
      setLoading(true)
      let query = supabase.from('dramas').select('*').limit(30)

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`)
      }

      const { data, error } = await query

      if (error) setError(error)
      else setDramas(data)
      setLoading(false)
    }

    fetchDramas()
  }, [searchQuery])

  return { dramas, loading, error }
}