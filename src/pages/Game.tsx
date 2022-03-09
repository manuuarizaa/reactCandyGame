import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ItemColor, Panel } from '../interfaces/interfaces';
import { useState , useEffect} from 'react';
import './Game.css';
import GameBoard from '../components/GameBoard';
import { square } from 'ionicons/icons';

const myItemColors: ItemColor = {
  color: ['blue', 'red', 'green', 'pink', 'purple', 'yellow']
};

const myPanel: Panel = {
  width: 8
};

const Game: React.FC = () => {

  const [currentColorArray, setCurrentColorArray] = useState<string[]>([])

  const checkColumOfFour = () =>{ 
    let maxToCheckColum: number = ((myPanel.width - 3) * myPanel.width - 1)
    for(let i: number = 0; i < maxToCheckColum; i++){
      const columOfFour: number[] = [i, i + myPanel.width, i + myPanel.width * 2, i + myPanel.width * 3]
      const selectedColor: string = currentColorArray[i]

      if( columOfFour.every(square => currentColorArray[square] === selectedColor)){
        columOfFour.forEach(square => currentColorArray[square] = '')
      }
    }
  }
  
  const checkRowOfFour = () =>{
    let notValid: number[] = [];
    for(let i: number = myPanel.width - 1; i < myPanel.width * myPanel.width; i += myPanel.width){
      notValid.push(i-2, i-1, i);
    }

    for(let i: number = 0; i < myPanel.width * myPanel.width; i++){
      const rowOfFour: number[] = [i, i + 1, i + 2, i + 3]
      const selectedColor: string = currentColorArray[i]

      if(notValid.includes(i)) continue

      if( rowOfFour.every(square => currentColorArray[square] === selectedColor)){
        rowOfFour.forEach(square => currentColorArray[square] = '')
      }
    }
  }

  const checkColumOfThree = () =>{
    /* 
    Calculamos el máximo de posiciones a comprobar en maxToCheckColum. 
    Si, por ejemplo, tenemos un tamaño de 8 x 8, 
    la última casilla a comprobar será la 47.
    Si tenemos una tablero de 6 x 6 la última será la 23.
    Si calculamos el tamaño de la columna - 2 (posiciones por debajo de la máxima casilla a comprobar)
    esto lo multiplicamos por el tamaño de la columna y le restamos 1 (por empezar a contar en 0), 
    nos proporciona el máximo índice del array a comprobar.

    Ej: 6 x 6

     0  1  2  3  4  5 (1)
     6  7  8  9 10 11 (2)
    12 13 14 15 16 17 (3)
    18 19 20 21 22 23 (4) X <- última casilla a comprobar ==> (6 - 2)*6 -1 = 23
    24 25 26 27 28 29 (5) X
    30 31 32 33 34 35 (6) X
    */
    let maxToCheckColum: number = ((myPanel.width - 2) * myPanel.width - 1)
    for(let i: number = 0; i < maxToCheckColum; i++){
      const columOfThree: number[] = [i, i + myPanel.width, i + myPanel.width * 2]
      const selectedColor: string = currentColorArray[i]
      /* 
      Con la función every comprobamos que todas las posiciones que le
      indicamos en el array cumplen cierta condición, en nuestro caso que
      las 3 posiciones indicadas en columOfThree tengan el mismo color el
      seleccionado actual.
      Si se cumple cambiamos el nombre del color por ''
      */
      if( columOfThree.every(square => currentColorArray[square] === selectedColor)){
        columOfThree.forEach(square => currentColorArray[square] = '')
      }
    }
  }

  const checkRowOfThree = () =>{
    /*
    Ej: 6 x 6
              X  X  X
    (0)(1)(2)(3)(4)(5)
     0  1  2  3  4  5
     6  7  8  9 10 11
    12 13 14 15 16 17
    18 19 20 21 22 23
    24 25 26 27 28 29
    30 31 32 33 34 35

    Las 2 última columnas no es necesario hacerles la comprobación
    */
    let notValid: number[] = [];

    for(let i: number = myPanel.width - 1; i < myPanel.width * myPanel.width; i += myPanel.width){
      notValid.push(i-1, i);
    }

    for(let i: number = 0; i < myPanel.width * myPanel.width; i++){
      const rowOfThree: number[] = [i, i + 1, i + 2]
      const selectedColor: string = currentColorArray[i]

      if(notValid.includes(i)) continue //Si el elemento por donde va está incluido en la lista de no válidos pasa al siguiente elemento

      if( rowOfThree.every(square => currentColorArray[square] === selectedColor)){
        rowOfThree.forEach(square => currentColorArray[square] = '')
      }
    }
  }

  const moveIntoSquareBelow = () => {
    /* 
    Evaluamos todos los elementos menos la última fila, ya que las fichas no pueden bajar más de eso.
    Si se detecta que la fila de abajo está en blanco, bajamos el color de esa posición a la de abajo.
    Además si detectamos que en la primera fila hay una ficha en blanco, generamos un color aleatorio,
    de esta manera vamos a rellenar la tabla al 100% ya que al bajar todos los elementos hacia abajo las
    fichas blancas van a quedar siempre arriba
    */
    let firstRow: number[] = [];
    for(let i: number = 0; i < myPanel.width; i++){
      firstRow.push(i);
    }

    for(let i: number = 0; i < myPanel.width * myPanel.width - myPanel.width; i++){

      const isFirstRow: boolean = firstRow.includes(i);
      if(isFirstRow && currentColorArray[i] === ''){
        let randomNumber: number = Math.floor(Math.random() * myItemColors.color.length);
        currentColorArray[i] = myItemColors.color[randomNumber];
      }

      if((currentColorArray[i + myPanel.width]) === ''){
        currentColorArray[i + myPanel.width] = currentColorArray[i];
        currentColorArray[i] = '';
      }
    }
  }

  const dragStart = () =>{
    console.log('arrastre empieza');
  }

  const dragDrop = () => {
    console.log('arrastre y suelta');
  }

  const dragEnd = () =>{
    console.log('arrastre termina');
  }


  const createPanel = () => {
    const randomColorArray: string[] = [];
    for(let i = 0; i < myPanel.width * myPanel.width; i++){
      const randomNumber0to5: number = Math.floor(Math.random() * myItemColors.color.length)
      const randomColor: string = myItemColors.color[randomNumber0to5]
      randomColorArray.push(randomColor)
    }
    /* console.log(randomColorArray); */
    setCurrentColorArray(randomColorArray);
  }

  useEffect(() => {
    createPanel();
  }, [myPanel.width])

  useEffect(()=>{
    const timer = setInterval(() => {
      checkColumOfFour()
      checkRowOfFour()
      checkColumOfThree()
      checkRowOfThree()
      moveIntoSquareBelow()
      setCurrentColorArray([...currentColorArray])
    }, 100)
    return () => clearInterval(timer)
  }, [checkColumOfFour, checkRowOfFour, checkColumOfThree, checkRowOfThree, moveIntoSquareBelow, currentColorArray])

  /* console.log(currentColorArray); */
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GameBoard board={currentColorArray} colors={myItemColors.color} dragStart={dragStart} dragDrop={dragDrop} dragEnd={dragEnd} ></GameBoard>
      </IonContent>
    </IonPage>
  );
};

export default Game;