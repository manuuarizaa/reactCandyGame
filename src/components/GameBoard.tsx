import './GameBoard.css';
import { PanelBoardProps } from '../interfaces/interfaces';
import { IonImg } from '@ionic/react';

const GameBoard: React.FC<PanelBoardProps> = ({ board, colors }) => {
    return (
      <div className="board">
        <div className="game">
            {board.map((colors, index) => (
                <IonImg
                    className="img"
                    key={index} 
                    style={{backgroundColor: colors}}
                ></IonImg>
            ))}
        </div>
      </div>
    );
  };
  
  export default GameBoard;