import { useEffect, useState } from "react";
import "./GroceryList.css";
import magicEightBallImg from "../../../src/assets/cart.webp";
import axios from "axios";
//import MagicEightBall from "../../assets/ball.webp";
//import { getQuestions } from "../../../server/controller/controller.cjs";

export default function MagicEightBall() {
  const api = "http://localhost:4500/api";
  const [question, setQuestion] = useState("");
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  function getQuestions() {
    axios
      .get(api + "/question")
      .then((questions) => setQuestionList(questions.data))
      .catch((err) => console.log(err));
  }

  function handleQuestion(event) {
    event.preventDefault();
    const question = event.target[0].value;
    const body = { question };
    axios
      .post(api + "/question", body)
      .then((questions) => setQuestionList(questions.data))
      .catch((err) => console.log(err));
  }

  function deleteQuestion(id) {
    axios
      .delete(api + "/question" + `?id=${id}`)
      .then((questions) => setQuestionList(questions.data))
      .catch((err) => console.log(err));
  }
  const questionMap = questionList.map((question) => {
    console.log(question);
    return (
      <div key={question.id}>
        <table class="groceryList">
            <tr>
             <th><h3>ITEM(S)</h3></th>
             <th><h3 id="action">ACTION</h3></th>
            </tr>
          
            <tr> 
             <td key={question.id}>{question.question}</td>
             <td id="buttonColumn"> <button id="deleteBtn" onClick={() => deleteQuestion(question.id)}>Delete</button> </td>
            </tr>
          

      </table> 
      
      </div>
    );
  });

  return (
    <>
        <h1>Grocery List</h1>
      
      <img src={magicEightBallImg} />
      <div>
        <h2>
          Create and manage your grocery list
        </h2>
      </div>
      <form 
        onChange={(event) => setQuestion(event.target.value)}
        onSubmit={handleQuestion}
      >
        <input type="text" id="questionInput" />
        <input type="submit" id="submitBtn" />
      </form>
      {questionMap}
    </>
  );
}
