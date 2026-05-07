import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://npypaamupqinwmkemnup.supabase.co'
const supabaseKey = 'sb_publishable_i4Fo49sPnASeOu825piFgw_93MxBv4A'

const supabase = createClient(supabaseUrl, supabaseKey)

window.guardarEstudiante = async function () {

    const nombre = document.getElementById('nombre').value

    const carrera = document.getElementById('carrera').value

    const { data, error } = await supabase
        .from('estudiantes')
        .insert([
            { nombre, carrera }
        ])

    if(error){

        console.log(error)
        alert('Error al guardar')

    } else {

        console.log(data)
        alert('Estudiante guardado')

    }
}