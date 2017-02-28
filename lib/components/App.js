import React, {Component} from 'react';
import Question from './Question';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      title: '',
      questions: '',
      scores: {},
    }
    this.grabScore = this.grabScore.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:3001/quizzes')
    .then(response => response.json())
    .then(response => response.quizzes.map(quiz => {
      this.setState({title: quiz.title, questions: quiz.questions});
    }))
  }

  grabScore(score, id){
    const obj = Object.assign({}, this.state.scores, {[id]: score});
    this.setState({scores: obj});
  }

  totalScores(){
    return Object.keys(this.state.scores).reduce((sum, key) => {
      return sum += this.state.scores[key]
    }, 0)
  }

  sendScores(total){
    fetch('http://localhost:3001/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: total,
      })
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }

  renderQuestions(){
    let questions;
    if(this.state.questions){
      questions = this.state.questions.map(question => {
        return (
          <Question key={question.id} title={question.title} answers={question.answers} id={question.id} grabScore={this.grabScore}/>
        )
      })
    }
    return questions;
  }

  render(){
    const total = this.totalScores();
    return(
      <section>
        <h1>{this.state.title}</h1>
        {this.renderQuestions()}
        <section>
          {total}
        </section>
        <button onClick={() => this.sendScores(total)}>
          send
        </button>
      </section>
    )
  }
}
