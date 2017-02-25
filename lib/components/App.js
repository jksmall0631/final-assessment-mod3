import React, {Component} from 'react';
import Question from './Question';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      title: '',
      questions: '',

    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/quizzes')
    .then(response => response.json())
    .then(response => response.quizzes.map(quiz => {
      this.setState({title: quiz.title, questions: quiz.questions});
    }))
  }

  renderQuestions(){
    let questions;
    if(this.state.questions){
      questions = this.state.questions.map(question => {
        return (
          <Question key={question.id} title={question.title} answers={question.answers}/>
        )
      })
    }
    return questions;
  }

  render(){
    return(
      <section>
        <h1>{this.state.title}</h1>
        {this.renderQuestions()}
        <button>Submit</button>
      </section>
    )
  }
}
