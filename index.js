import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://npypaamupqinwmkemnup.supabase.co'

const supabaseKey = 'sb_publishable_i4Fo49sPnASeOu825piFgw_93MxBv4A'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {

  const { data, error } = await supabase
    .from('estudiantes')
    .select('*')

  if (error) {

    console.log('Error:', error)

  } else {

    console.log('Datos:', data)

  }

}

obtenerEstudiantes()