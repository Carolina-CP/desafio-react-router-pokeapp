import React from 'react';
import { Card } from 'react-bootstrap';

//importamos react-router-dom
import { useParams } from 'react-router-dom';

//importamos hooks
import { useState, useEffect } from 'react';

const Detalle = () => {

  // recibo el parámetro desde useNavigate
  const { name, url } = useParams();


    // definimos un estado para la API 
  const [detalle, setDetalle] = useState({});

  //Función que consulta la API
  const consultarDetalle = async (name) => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(`${url}/${name}`)
    const unico = await response.json()
    setDetalle(unico);
  }
  console.log('imprimir pokemon seleccionado')
  console.log(detalle)

  //llamamos a la Api al momento de la carga
  useEffect(() => {
    consultarDetalle(name);
  }, [name]);

  return (
    <div className='mt-5 justify-content-center text-center'>
     
    {  <Card className='mt-5 text-center' border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
              
            </Card.Body>
        </Card>}

    </div>
  )
}

export default Detalle