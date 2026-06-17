import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useDramas(searchQuery = '', selectedGenre = '') {
  const [dramas, setDramas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const LIMIT = 32

  useEffect(() => {
    async function fetchDramas() {
      setLoading(true)
      let query = supabase
        .from('dramas')
        .select('*')
        .range(page * LIMIT, (page + 1) * LIMIT - 1)

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`)
      }

      if (selectedGenre) {
        query = query.ilike('genre', `%${selectedGenre}%`)
      }

      const { data, error } = await query

      if (error) setError(error)
      else {
        setDramas(prev => page === 0 ? data : [...prev, ...data])
        setHasMore(data.length === LIMIT)
      }
      setLoading(false)
    }

    fetchDramas()
  }, [page, searchQuery, selectedGenre])

  function loadMore() {
    setPage(prev => prev + 1)
  }

  function resetPage() {
    setPage(0)
    setDramas([])
    setHasMore(true)
  }

  return { dramas, loading, error, hasMore, loadMore, resetPage }
}