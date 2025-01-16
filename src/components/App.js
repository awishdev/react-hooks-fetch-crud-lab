import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  const [refreshToggle, setRefreshToggle] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((data) => setQuestions(data))

    //console.log("ran")
  }, [refreshToggle]);

  function onAddQuestion(newQ){

    setQuestions(() => [...questions, newQ]);
    setRefreshToggle(() => !refreshToggle);

  }

  function onDelete(id){

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => setRefreshToggle(() => !refreshToggle));

  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={onAddQuestion}/> : <QuestionList questions={questions} onDelete={onDelete}/>}
    </main>
  );
}

export default App;
