import React from "react";
import QuestionItem from "./QuestionItem";



function QuestionList( {questions, onDelete}) {

  const questionsDisplay = (questions.map((question) => {
    return (
    
      <QuestionItem key={question.id} question={question} onDelete={onDelete}/>
      
    )
  }));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsDisplay}
      </ul>
    </section>
  );
}

export default QuestionList;
