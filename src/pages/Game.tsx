import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { ItemColor, Panel } from '../interfaces/interfaces';
import { useState , useEffect} from 'react';
import './Game.css';
import GameBoard from '../components/GameBoard';
import ScoreBoard from '../components/ScoreBoard';
import pikachu from '../images/pikachu.png';
import charmander from '../images/charmander.png';
import snorlax from '../images/snorlax.png';
import jigglypuff from '../images/jigglypuff.png';
import squirtle from '../images/squirtle.png';
import eevee from '../images/eevee.png';
import pokeball from '../images/pokeball.png';


const myItemColors: ItemColor = {
  color: [
    squirtle, 
    charmander, 
    eevee, 
    jigglypuff, 
    snorlax, 
    pikachu]
};

const myPanel: Panel = {
  width: 8
};

const Game: React.FC = () => {

  const [currentColorArray, setCurrentColorArray] = useState<string[]>([]);
  const [squareBeingDragged, setSquareBeingDragged] = useState<any>(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState<any>(null);
  const [score, setScore] = useState<number>(0);

  const checkColumOfFour = () =>{ 
    let maxToCheckColum: number = ((myPanel.width - 3) * myPanel.width - 1);
    for(let i: number = 0; i <= maxToCheckColum; i++){
      const columOfFour: number[] = [i, i + myPanel.width, i + myPanel.width * 2, i + myPanel.width * 3];
      const selectedColor: string = currentColorArray[i];

      if( columOfFour.every(square => currentColorArray[square] === selectedColor)){
        columOfFour.forEach(square => currentColorArray[square] = pokeball);
        if(selectedColor !== pokeball){
          setScore((sc) => sc+4);
          localStorage.setItem('score', (score + 4).toString());
        }
      }
    }
  }

  const booleanCheckColumOfFour = () =>{
    let maxToCheckColum: number = ((myPanel.width - 3) * myPanel.width - 1);
    for(let i: number = 0; i <= maxToCheckColum; i++){
      const columOfFour: number[] = [i, i + myPanel.width, i + myPanel.width * 2, i + myPanel.width * 3];
      const selectedColor: string = currentColorArray[i];

      if( columOfFour.every(square => currentColorArray[square] === selectedColor))
        return true;
    }
  }
  
  const checkRowOfFour = () =>{
    let notValid: number[] = [];
    for(let i: number = myPanel.width - 1; i < myPanel.width * myPanel.width; i += myPanel.width){
      notValid.push(i-2, i-1, i);
    }

    for(let i: number = 0; i < myPanel.width * myPanel.width; i++){
      const rowOfFour: number[] = [i, i + 1, i + 2, i + 3];
      const selectedColor: string = currentColorArray[i];

      if(notValid.includes(i)) continue

      if( rowOfFour.every(square => currentColorArray[square] === selectedColor)){
        rowOfFour.forEach(square => currentColorArray[square] = pokeball);
        if(selectedColor !== pokeball){
          setScore((sc) => sc+4);
          localStorage.setItem('score', (score + 4).toString());
        }
      }

    }
  }

  const booleanCheckRowOfFour = () =>{
    let notValid: number[] = [];
    for(let i: number = myPanel.width - 1; i < myPanel.width * myPanel.width; i += myPanel.width){
      notValid.push(i-2, i-1, i);
    }

    for(let i: number = 0; i < myPanel.width * myPanel.width; i++){
      const rowOfFour: number[] = [i, i + 1, i + 2, i + 3];
      const selectedColor: string = currentColorArray[i];

      if(notValid.includes(i)) continue;

      if( rowOfFour.every(square => currentColorArray[square] === selectedColor))
        return true;
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
    for(let i: number = 0; i <= maxToCheckColum; i++){
      const columOfThree: number[] = [i, i + myPanel.width, i + myPanel.width * 2];
      const selectedColor: string = currentColorArray[i];
      /* 
      Con la función every comprobamos que todas las posiciones que le
      indicamos en el array cumplen cierta condición, en nuestro caso que
      las 3 posiciones indicadas en columOfThree tengan el mismo color el
      seleccionado actual.
      Si se cumple cambiamos el nombre del color por pokeball
      */
      if( columOfThree.every(square => currentColorArray[square] === selectedColor)){
        columOfThree.forEach(square => currentColorArray[square] = pokeball);
        if(selectedColor !== pokeball){
          setScore((sc) => sc+3);
          localStorage.setItem('score', (score + 3).toString());
        }
          
      }
    }
  }

  const booleanCheckColumOfThree = () =>{
    let maxToCheckColum: number = ((myPanel.width - 2) * myPanel.width - 1)
    for(let i: number = 0; i <= maxToCheckColum; i++){
      const columOfThree: number[] = [i, i + myPanel.width, i + myPanel.width * 2];
      const selectedColor: string = currentColorArray[i];
      /* 
      Con la función every comprobamos que todas las posiciones que le
      indicamos en el array cumplen cierta condición, en nuestro caso que
      las 3 posiciones indicadas en columOfThree tengan el mismo color el
      seleccionado actual.
      Si se cumple cambiamos el nombre del color por pokeball
      */
      if( columOfThree.every(square => currentColorArray[square] === selectedColor))
        return true;
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
      const rowOfThree: number[] = [i, i + 1, i + 2];
      const selectedColor: string = currentColorArray[i];

      if(notValid.includes(i)) continue; //Si el elemento por donde va está incluido en la lista de no válidos pasa al siguiente elemento

      if( rowOfThree.every(square => currentColorArray[square] === selectedColor)){
        rowOfThree.forEach(square => currentColorArray[square] = pokeball);
        if(selectedColor !== pokeball){
          setScore((sc) => sc+3);
          localStorage.setItem('score', (score + 3).toString());
        }
          
      }
    }
  }

  const booleanCheckRowOfThree = () =>{
    let notValid: number[] = [];

    for(let i: number = myPanel.width - 1; i < myPanel.width * myPanel.width; i += myPanel.width){
      notValid.push(i-1, i);
    }

    for(let i: number = 0; i < myPanel.width * myPanel.width; i++){
      const rowOfThree: number[] = [i, i + 1, i + 2];
      const selectedColor: string = currentColorArray[i];

      if(notValid.includes(i)) continue; //Si el elemento por donde va está incluido en la lista de no válidos pasa al siguiente elemento

      if( rowOfThree.every(square => currentColorArray[square] === selectedColor))
        return true;
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

    for(let i: number = 0; i <= myPanel.width * myPanel.width - myPanel.width; i++){

      const isFirstRow: boolean = firstRow.includes(i);
      if(isFirstRow && currentColorArray[i] === pokeball){
        let randomNumber: number = Math.floor(Math.random() * myItemColors.color.length);
        currentColorArray[i] = myItemColors.color[randomNumber];
      }

      if((currentColorArray[i + myPanel.width]) === pokeball){
        currentColorArray[i + myPanel.width] = currentColorArray[i];
        currentColorArray[i] = pokeball;
      }
    }
  }

  const dragStart = (e: Event) =>{
    setSquareBeingDragged(e.target);
  }

  const dragDrop = (e: Event) => {
    setSquareBeingReplaced(e.target);
  }

  const dragEnd = (e: Event) =>{
    const squareBeingDraggedId: number= parseInt(squareBeingDragged?.getAttribute('data-id'));
    const squareBeingReplacedId: number = parseInt(squareBeingReplaced?.getAttribute('data-id'));

    currentColorArray[squareBeingReplacedId] = squareBeingDragged?.getAttribute('src');
    currentColorArray[squareBeingDraggedId] = squareBeingReplaced?.getAttribute('src');

    const validPosition: number[] = [
      squareBeingDraggedId - 1,
      squareBeingDraggedId - myPanel.width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + myPanel.width
    ]

    const validMove: boolean = validPosition.includes(squareBeingReplacedId);
    
    const isColumOfFour: any = booleanCheckColumOfFour();
    const isRowOfFour: any = booleanCheckRowOfFour();
    const isColumOfThree: any = booleanCheckColumOfThree();
    const isRowOfThree: any = booleanCheckRowOfThree();

    if(squareBeingReplacedId !== NaN && 
      validMove && 
      (isColumOfFour || isRowOfFour || isColumOfThree || isRowOfThree)
    ){
      setSquareBeingDragged(null);
      setSquareBeingReplaced(null);
    }else{
      currentColorArray[squareBeingReplacedId] = squareBeingReplaced?.getAttribute('src');
      currentColorArray[squareBeingDraggedId] = squareBeingDragged?.getAttribute('src');
      setCurrentColorArray([...currentColorArray]);
    }

  }

  const createPanel = () => {
    const randomColorArray: string[] = [];
    for(let i = 0; i < myPanel.width * myPanel.width; i++){
      const randomNumber0to5: number = Math.floor(Math.random() * myItemColors.color.length);
      const randomColor: string = myItemColors.color[randomNumber0to5];
      randomColorArray.push(randomColor);
    }
    setCurrentColorArray(randomColorArray);
  }

  useEffect(() => {
    createPanel();
  }, [myPanel.width])

  useEffect(() => {
    if(Number(localStorage.getItem('score')) > Number(localStorage.getItem('maxScore')))
      localStorage.setItem('maxScore', score.toString());
  }, [score])

  useEffect(()=>{
    const timer = setInterval(() => {
      checkColumOfFour();
      checkRowOfFour();
      checkColumOfThree();
      checkRowOfThree();
      moveIntoSquareBelow();
      setCurrentColorArray([...currentColorArray]);
    }, 100)
    return () => clearInterval(timer)
  }, [checkColumOfFour, checkRowOfFour, checkColumOfThree, checkRowOfThree, moveIntoSquareBelow, currentColorArray])
  
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="ion-text-center">Pokemon Candy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GameBoard 
          board={currentColorArray}
          dragStart={dragStart} 
          dragDrop={dragDrop} 
          dragEnd={dragEnd}
        />

        <ScoreBoard score={score}/>

        <IonGrid fixed>
          <IonRow className="credits">
            <IonCol size="12">
            <a 
              href="https://www.youtube.com/watch?v=PBrEq9Wd6_U" 
              title="Inspiración" 
              target="_blank"
            >
              Código basado en el video de youtube 'Candy Crush in React' de <b>Ania Kubów</b>
            </a>
            </IonCol>
            <IonCol size="12">
              <a href="https://www.flaticon.es/iconos-gratis/pokemon"  title="Iconos Pokemon" target="_blank">Iconos Pokemon creados por <b>Roundicons Freebies</b></a>
            </IonCol>
            <IonCol size="12">
              <a href="https://www.flaticon.es/iconos-gratis/pokemon" title="Icono pokeball" target="_blank">Icono Pokeball creado por <b>Those Icons</b></a>
            </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Game;