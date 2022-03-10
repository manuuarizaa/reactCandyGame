import './GameBoard.css';
import { PanelBoardProps } from '../interfaces/interfaces';
import { IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';

const GameBoard: React.FC<PanelBoardProps> = (
  { board, 
    dragStart,
    dragDrop,
    dragEnd
  }) => {
    return (
      <div>
        <div className="board">
          <div className="game">
              {board.map((color, index) => ( //El board es un array de colores, por lo que le hacemos un map y podemos manejar cada color
                  <IonImg
                      className="img"
                      key={index} 
                      src={color}
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
        <div>
          <IonGrid fixed>
            <IonRow>
              <IonCol size="12">
                <a href="https://www.flaticon.es/iconos-gratis/pokemon"  title="Iconos Pokemon" target="_blank">Iconos Pokemon creados por <b>Roundicons Freebies</b></a>
              </IonCol>
              <IonCol size="12">
                <a href="https://www.flaticon.es/iconos-gratis/pokemon" title="Icono pokeball" target="_blank">Icono Pokeball creado por <b>Those Icons</b></a>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>
    );
  };
  
  export default GameBoard;