import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function handleSubmit() {
    setLoading(true)
    setError(null)

    const { error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password })

    if (error) setError(error.message)
    else navigate('/')
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="bg-gray-900 rounded-xl p-8 w-full max-w-md">
        <h1 className="text-rose-500 text-2xl font-bold mb-6 text-center">DramaList</h1>
        <h2 className="text-xl font-semibold mb-6 text-center">
          {isSignUp ? 'Create Account' : 'Sign In'}
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-rose-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-rose-500 transition"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg transition disabled:opacity-50"
          >
            {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
          <p className="text-center text-gray-400 text-sm">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-rose-400 hover:text-rose-300 ml-1 transition"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth