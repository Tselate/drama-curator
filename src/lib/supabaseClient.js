import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jyzfvbyvqgzbgqrawdis.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5emZ2Ynl2cWd6YmdxcmF3ZGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjAzOTYsImV4cCI6MjA5NDczNjM5Nn0.GLEnGZMDGWrMKaxlBiCF6QKoy7Y6Sh3DRoT5l6-d-p0'

export const supabase = createClient(supabaseUrl, supabaseKey)