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

  const checkColumOfThree = () =>{
    let maxToCheckColum: number = ((myPanel.width - 2) * myPanel.width - 1)
    for(let i = 0; i < maxToCheckColum; i++){
      const columOfThree = [i, i + myPanel.width, i + myPanel.width * 2]
      const selectedColor = currentColorArray[i]

      if( columOfThree.every(square => currentColorArray[square] === selectedColor)){
        columOfThree.forEach(square => currentColorArray[square] = '')
      }
    }
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
      checkColumOfThree()
      setCurrentColorArray([...currentColorArray])
    }, 100)
    return () => clearInterval(timer)
  }, [checkColumOfThree, currentColorArray])

  /* console.log(currentColorArray); */
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GameBoard board={currentColorArray} colors={myItemColors.color}></GameBoard>
      </IonContent>
    </IonPage>
  );
};

export default Game;