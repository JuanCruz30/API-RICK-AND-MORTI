import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Box,Image } from '@chakra-ui/react';

function App() {

  const [personajes, setPersonajes] = useState([])
  
  const busqueda = async ()=>{
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    setPersonajes(response.data.results)

  }
  busqueda()

  return (
    <div className="App">

      {personajes.map(personaje=>(
           <Box>
              {personajes.map(personaje=>(
                <Image src={personaje.img}/>
              ))}

           </Box> 
         
      ))}
      
    </div>
  );
}

export default App;
