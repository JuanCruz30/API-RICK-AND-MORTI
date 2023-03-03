import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Box,Container,Heading,Image,Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
    <Container   maxW='1200px'>
      
      <Box width={'100%'} textAlign='center' height={'100px'} alignItems='center' display={'flex'} justifyContent='center'>
        <button className='css-button-sliding-to-top--sky' onClick={paginaAnterior} disabled={pagina === 1 ? 'disabled' : ''}>Anterior</button>

        <button className='css-button-sliding-to-top--sky' onClick={paginaSiguiente} disabled={pagina === 42 ? 'disabled' : ''}>Siguiente</button>
      </Box>
      
      <Box display={'flex'} justifyContent='center' flexDirection='row' gap={'2rem'} flexWrap={'wrap'}>

        {personajes.map(personaje => (
          <Box as={motion.div}
          height='40px'
          width='40px'
          drag='x'
          dragConstraints={{ left: -0, right: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition='0.1s linear' border={'1px solid black'} gap={'1rem'} className='box' display={'flex'} flexDirection='column'alignItems={'center'} w={'200px'} h='400px'key={personaje.id}>
            
            <Heading marginTop={'10px'} fontSize={'15px'}>{personaje.name}</Heading>
            <Image src={personaje.image} />
            <Text>Status:  {personaje.status}</Text>
            <Text>Especie:  {personaje.species}</Text>
          </Box>
        ))}

      </Box>

           
         
      
      
    </Container>
  );
}

export default App;
