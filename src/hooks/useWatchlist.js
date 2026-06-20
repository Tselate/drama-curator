import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from './useAuth'

export function useWatchlist() {
  const { user } = useAuth()
  const [watchlist, setWatchlist] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  if (!user) {
    setWatchlist([])
    setLoading(false)
    return
  }

  let cancelled = false

  async function fetchWatchlist() {
    const { data, error } = await supabase
      .from('watchlist')
      .select('*')
      .eq('user_id', user.id)

    if (!cancelled) {
      if (error) console.error(error)
      else setWatchlist(data)
      setLoading(false)
    }
  }

    fetchWatchlist()

    return () => {
        cancelled = true
    }
  }, [user])

  async function addToWatchlist(dramaId, status) {
    const { data, error } = await supabase
      .from('watchlist')
      .insert({ user_id: user.id, drama_id: dramaId, status })
      .select()
      .single()

    if (error) console.error(error)
    else setWatchlist(prev => [...prev, data])
  }

  async function updateStatus(dramaId, status) {
    const { error } = await supabase
      .from('watchlist')
      .update({ status })
      .eq('user_id', user.id)
      .eq('drama_id', dramaId)

    if (error) console.error(error)
    else setWatchlist(prev =>
      prev.map(item =>
        item.drama_id === dramaId ? { ...item, status } : item
      )
    )
  }

  async function removeFromWatchlist(dramaId) {
    const { error } = await supabase
      .from('watchlist')
      .delete()
      .eq('user_id', user.id)
      .eq('drama_id', dramaId)

    if (error) console.error(error)
    else setWatchlist(prev => prev.filter(item => item.drama_id !== dramaId))
  }

  async function rateDrama(dramaId, rating) {
    const { error } = await supabase
      .from('watchlist')
      .update({ user_rating: rating })
      .eq('user_id', user.id)
      .eq('drama_id', dramaId)

    if (error) console.error(error)
    else setWatchlist(prev =>
      prev.map(item =>
        item.drama_id === dramaId ? { ...item, user_rating: rating } : item
      )
    )
  }

  function getStatus(dramaId) {
    return watchlist.find(item => item.drama_id === dramaId)?.status ?? null
  }

  return { watchlist, loading, addToWatchlist, updateStatus, removeFromWatchlist, getStatus, rateDrama }
}