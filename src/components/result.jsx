import React from 'react';

const Result = ({score, playAgain}) => {
    return (
    <div className="result-page">
        <h2 className="score">Your Score: {score}/5 correct answers</h2>
        <button className="playBtn" onClick={playAgain}>Play Again</button>
    </div>
    )
};

export default Result;