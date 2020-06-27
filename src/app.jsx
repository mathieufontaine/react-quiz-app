import React, { Component } from 'react';
import './assets/style.css';
import questionDDB from './database/quiz_questions.js';
import QuestionBox from './components/question_box.jsx';
import Result from './components/result.jsx';
import logo192 from './logo192.png';


class App extends Component {
    state = {
        questions: [],
        score: 0,
        responses: 0
    }

    getQuestions = () => {
        questionDDB()
        .then(list => {
            this.setState({questions: list});
        });
    };

    evaluateAnswer(answer, correctAnswer) {
        if (answer === correctAnswer){
            this.setState({score: this.state.score + 1});
        };
        this.setState({responses: this.state.responses < 5 ? this.state.responses +1 : 5})
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({score: 0, responses: 0});
    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className="app">
                <h1 className="title">Quiz App</h1>
                <div className="questions-list">
                    {this.state.questions.length > 0 && 
                        this.state.responses < 5 &&
                        this.state.questions.map(({question, answers, correct, questionId}) => 
                        <QuestionBox 
                            question={question} 
                            answers={answers} 
                            key={questionId} 
                            selected={answer => this.evaluateAnswer(answer,correct)}
                        />)
                    }
                 </div>
                 {this.state.responses === 5 ?
                (<Result score={this.state.score} playAgain={this.playAgain}/>) : null
                }
                <footer>
                <p>Built by Mathieu Fontaine - with React</p>
                <img src={logo192} alt={'react logo'}/>
                </footer>
            </div>
        );
    }
}

export default App;