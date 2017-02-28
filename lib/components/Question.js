import React, {Component} from 'react';
import Answer from './Answer';

const Question = ({title, answers, id, grabScore}) => {
  let each = answers.map(answer => {
    return(<Answer key={answer.score} title={answer.title} score={answer.score} id={id} grabScore={grabScore}/>)
  })
  return(
    <div>
      <h3>{title}</h3>
      <form>
        {each}
      </form>
    </div>
  )
}

export default Question;
