import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { itemColor, panel } from '../interfaces/interfaces';
import './Game.css';

const myItemColors: itemColor = {
  color: ['blue', 'red', 'green', 'pink', 'purple', 'yellow']
};

const myPanel: panel = {
  width: 8
};

const Game: React.FC = () => {

  const createPanel = () => {
    const randomColorArray = [];
    for(let i = 0; i < myPanel.width * myPanel.width; i++){
      const randomNumber0to5 = Math.floor(Math.random() * myItemColors.color.length);
      const randomColor = myItemColors.color[randomNumber0to5];
      randomColorArray.push(randomColor);
    }
    console.log(randomColorArray);
  }

  createPanel();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>First view</p>
      </IonContent>
    </IonPage>
  );
};

export default Game;