import React from 'react'
import Trivia_Data from './data.json'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentQuestion: {question: "", answer: "", category: ""},
			showAnswer: false,
			previousQuestion: {question: "", answer: "", category: ""}
		};
	}
	componentDidMount() {
		//let randomQuestion = Trivia_Data.trivia[Math.floor(Math.random()*Trivia_Data.trivia.length)]
		//this.setState({currentQuestion: randomQuestion})
		this.generateRandomQuestion()
	}

	handleClickShowAnswer() {
		this.setState({showAnswer: true})
	}

	handleClickNextQuestion() {
		this.generateRandomQuestion()
		this.setState({showAnswer: false})
	}

	generateRandomQuestion() {
		let randomQuestion = Trivia_Data.trivia[Math.floor(Math.random()*Trivia_Data.trivia.length)]


		if(this.state.currentQuestion.question === randomQuestion.question){
			this.generateRandomQuestion()
			return
		}

		this.setState({currentQuestion: randomQuestion, previousQuestion: randomQuestion})
		


	}
	render() { return (
		<div>
			<div> {this.state.currentQuestion.question} </div>
			<button onClick={() => this.handleClickShowAnswer()}>Show Answer</button>
			{this.state.showAnswer ? 
				<div> {this.state.currentQuestion.answer} </div>
			: null}
			<button onClick={() => this.handleClickNextQuestion()}>Next Question</button>
			<div> {this.state.currentQuestion.category} </div>
		</div>
	) }
}

export default App