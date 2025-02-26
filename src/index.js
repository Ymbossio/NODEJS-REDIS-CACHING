import express from "express"
import responseTime from "response-time"
import {createClient } from "redis"
import { PORT, URL_API } from "./global.js"

const app = express()
app.use(responseTime())

const client = createClient({
    host: 'localhost',
    port: 6379
})

// All character
app.get('/character', async (req, res) => {
    try {
        // Consulta a Redis si la petición ya fue realizada
        const validateQuery = await client.get('character-all')

        // Si ya se realizó, devolver la consulta cacheada
        if (validateQuery) return res.json(JSON.parse(validateQuery))

        // Si no, hacer la consulta
        const response = await fetch(URL_API)
        if (!response.ok) {
            return  res.status(500).json({ error: 'Error al obtener personajes' })
        }

        const result = await response.json()  // Definir la variable result

        // Guardar la respuesta en caché
        await client.set('character-all', JSON.stringify(result))

        // Retornar los datos
        return res.json(result)

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error interno del servidor' })
    }
})

//Character
 app.get('/character/:id', async (req, res)=>{

    try {
        
        const { id } = req.params;
     
        const Validate = await client.get('Character-one')
        if(Validate) return res.json(JSON.parse(Validate))
     
         const response = await fetch(`${URL_API}${id}`)
     
         if(!response) {
             return res.status(500).json({error: 'error al obtener el personaje'})
         }
     
         const result = await response.json()
     
         const SaveResult = await client.set('Character-one', JSON.stringify(result))
         console.log(SaveResult, "Result Query")
     
         return res.json(result)

    } catch (error) {
        console.error(error)
    }
    
})


//Conexión a redis y lanzamiento del servidor
async function main (){
    try {
        await client.connect()
        app.listen(PORT)
        console.log(`Server run on port: ${PORT} 🚀`)
        
    } catch (error) {   
        console.error(error)
        
    }
}

main()
    