import { scoreProps } from "../interfaces/interfaces";

const ScoreBoard: React.FC<scoreProps> = ({score}) =>{
    return(
        <div className="score-board">
            <h2>{score}</h2>
        </div>
    )
}

export default ScoreBoard;