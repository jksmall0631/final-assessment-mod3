import React, {Component} from 'react';

const Answer = ({title, score}) => {
  return(
    <form>
      <input type='radio' value={title}/>{title}
    </form>
  )
}

export default Answer;
