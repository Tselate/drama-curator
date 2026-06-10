import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useDramas() {
  const [dramas, setDramas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDramas() {
      const { data, error } = await supabase
        .from('dramas')
        .select('*')
        .limit(30)

      if (error) setError(error)
      else setDramas(data)
      setLoading(false)
    }

    fetchDramas()
  }, [])

  return { dramas, loading, error }
}