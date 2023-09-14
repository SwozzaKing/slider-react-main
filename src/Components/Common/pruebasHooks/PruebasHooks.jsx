import { useState, useEffect } from "react"
import "./Prueba.css";

const PruebasHooks = ( {contador, setContador} ) => {

    let arr = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18111088/pexels-photo-18111088/free-photo-of-playa-vacaciones-gente-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/18171438/pexels-photo-18171438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

   ]

    
    const [img, setImg ] = useState("")

    useEffect( ()=>{
       setImg(arr[contador -1])
    }, [contador] )
    
    const maxContador = arr.length;

    const handleIzquierda = () => {
      if (contador > 1){
        setContador( contador -1);
      }else{
        setContador(maxContador);
      }
    }

    const handleDerecha = () => {
      if (contador < maxContador){
        setContador( contador +1);
      }else{
        setContador(1);
      }
    }

  return (
    <div className="" >
        <table>
          <tr>
            <th>
              <img src={img} 
              alt="" 
              className="img"
              />
            </th>
          </tr>
          <tr>
            <th>
              <h4 className="cont">{contador}</h4>
              <button className="izquierda" onClick={ handleIzquierda }>Izquierda</button>
              <button className="derecha" onClick={ handleDerecha }>Derechao </button>
            </th>
          </tr>
        </table>
    </div>
   
  )
}

export default PruebasHooks
