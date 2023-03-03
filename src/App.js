import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Box,Button,Heading,Image } from '@chakra-ui/react';

function App() {

  const [personajes, setPersonajes] = useState([])

  const [pagina, setPagina] = useState(1)
  
  useEffect(()=>{
      const busqueda = async ()=>{
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        setPersonajes(response.data.results)

      }
      busqueda()
      console.log('hola')
  },[pagina]);

  const paginaAnterior = () =>{
    setPagina (pagina - 1)
  }

  const paginaSiguiente = () =>{
    setPagina (pagina + 1)
  }


  return (
    <div className="App">

            <Button onClick={paginaAnterior}>Anterior</Button>

            <Button onClick={paginaSiguiente}>Siguiente</Button>
              
              {personajes.map(personaje=>(
                <Box key={personaje.id}>
                    <Heading>{personaje.name}</Heading>
                    <Image src={personaje.image}/>
                </Box> 
              ))}

           
         
      
      
    </div>
  );
}

export default App;
