import React, {Component} from 'react';

const Answer = ({title, score, id, grabScore}) => {

  return(
    <div>
      <input type='radio' value={score} name={id} onClick={() => grabScore(score, id)}/>{title}
    </div>
  )
}

export default Answer;
