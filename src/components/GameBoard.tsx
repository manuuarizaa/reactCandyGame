import './GameBoard.css';
import { PanelBoardProps } from '../interfaces/interfaces';
import { IonImg } from '@ionic/react';

const GameBoard: React.FC<PanelBoardProps> = (
  { board, 
    colors, 
    dragStart,
    dragDrop,
    dragEnd
  }) => {
    return (
      <div className="board">
        <div className="game">
            {board.map((color, index) => ( //El board es un array de colores, por lo que le hacemos un map y podemos manejar cada color
                <IonImg
                    className="img"
                    key={index} 
                    style={{backgroundColor: color}}
                    alt={color}
                    data-id={index}
                    draggable={true} //Elemento puede ser arrastrado
                    onDragStart={dragStart}
                    /*
                    event.preventDefault()
                    Cancela el evento si este es cancelable, 
                    sin detener el resto del funcionamiento del evento, 
                    es decir, puede ser llamado de nuevo.
                    */
                    onDragOver = {(e) => e.preventDefault()}
                    onDragEnter = {(e) => e.preventDefault()}
                    onDragLeave = {(e) => e.preventDefault()}
                    onDrop = {dragDrop} 
                    onDragEnd = {dragEnd}
                ></IonImg>
            ))}
        </div>
      </div>
    );
  };
  
  export default GameBoard;