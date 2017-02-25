import React, {Component} from 'react';
import Answer from './Answer';

const Question = ({title, answers}) => {
  let each = answers.map(answer => {
    return(<Answer key={answer.score} title={answer.title} score={answer.score}/>)
  })
  return(
    <div>
      <h3>{title}</h3>
      <ul>
        {each}
      </ul>
    </div>
  )
}

export default Question;
