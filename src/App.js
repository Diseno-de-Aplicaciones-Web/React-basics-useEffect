import { useEffect, useState } from "react";

function App() {

  const [ counter, setCounter ] = useState(0)

  function clickHandler () {
    setCounter(counter+1)
    /**
     * Los setters de los states con asincronos, así que el código que
     * sigue a la llamada a uno de estos setters se ejecuta sin garantías
     * de que el nuevo valor establecido por el setter se haya establecido.
     * La siguiente linea tiene todas las posibilidades de mostrar el valor
     * sin actualizar del state 'counter'.
     */
    console.log("Sin effect:",counter)
  }

  /**
   * Para empezar, recuerda que todo el código contenido en un useEffect
   * se ejecutará al menos una vez al crearse el componente.
   */

  /**
   * Si queremos ejecutar código que dependa del valor de un state
   * o un prop encerraremos dicho código en un useEffect indicando
   * en el argumento que el código depende de dicho valor.
   * El código se ejecutará en la creación del componente y cada vez
   * que se establezca el valor de las dependencias indicadas.
   */
   useEffect(
    ()=>{
      console.log("Con effect, establecido el nuevo valor:", counter)
    },
    [counter]
  )

  /**
   * La siguiente linea se ejecuta cada vez que el 
   * componente se renderiza. Eso puede no interesarnos. Podemos 
   * restringir la ejecución de un fragmento de código al momento
   * de la creación del compomente encerrando ese código en un 
   * useEffect sin dependencias. Al no tener dependencias sólo se 
   * ejecutará inicialmente al crearse el componente
   */

  console.log("Cada vez que se renderiza el componente");

  useEffect(
    ()=>{
      console.log("Log controlado con effect. Sólo se ejecuta al crear el componente");
    },
    []
  )

  /**
   * Existe otro caso de uso de useEffect. Cuando queremos que un código se
   * ejecute en la destrucción del componente.
   */
  useEffect(
    ()=>{
      return ()=>{
        console.log('Esto se ejecuta al destruir el componente')
      }
    },
    []
  )

  return (
    <>
      <p onClick={clickHandler}>Contador: {counter}</p>
      <p>Mira la puñetera consola</p>
    </>
  );
}

export default App;
