import React, { useState } from 'react';

const QuestionBox = ({question, answers, selected}) => {
    const [answerList] = useState(answers);


    const changeBgColor = (e) => {
        e.currentTarget.style.backgroundColor='orange';
    }

    const handleClick = (answer) => {
        const buttons = document.querySelectorAll('.answer-button')
        buttons.forEach(button => {
            if([...button.parentNode.children].some(child => child.innerText == answer)){
            button.classList.add('disabled');
            };
        });
    }

    return (
        <div className="question-box">
            <h3 className="question">{question}</h3>
            <div className="answers">
                {answerList.map((answer, index) => {
                    return (
                    <button key={index} className="answer-button" onClick={(e)=>{
                        changeBgColor(e);
                        selected(answer);
                        handleClick(answer);
                    }}>
                        {answer}
                    </button>
                    )
                })
                }
            </div>
        </div>
    )
}
export default QuestionBox;