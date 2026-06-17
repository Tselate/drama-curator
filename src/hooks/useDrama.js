import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useDrama(id) {
  const [drama, setDrama] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDrama() {
      const { data, error } = await supabase
        .from('dramas')
        .select('*')
        .eq('id', id)
        .single()

      if (error) setError(error)
      else setDrama(data)
      setLoading(false)
    }

    fetchDrama()
  }, [id])

  return { drama, loading, error }
}