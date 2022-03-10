import { scoreProps } from "../interfaces/interfaces";
import './ScoreBoard.css'

const ScoreBoard: React.FC<scoreProps> = ({score}) =>{
    return(
        <div>
            <h2 className="score-board">Pokemon capturados: <b>{score}</b></h2>
        </div>
    )
}

export default ScoreBoard;