import GroceryList from './components/MagicEightBall/GroceryList';

function App() {
 //const api ='http://localhost:4500/api'
 //const [question, setQuestion] = useState('')
 //const [questionList, setQuestionList] = useState([])

 // useEffect(() => {}, [])

   // function handleQuestion(event) {
   //   event.preventDefault();
   //   const question = event.target[0].value
   //    const body = { question }
   //   axios.post(api + '/question', body).then((questions) => setQuestionList(questions.data)).catch(err => console.log(err))
    //}

   // const questionMap = questionList.map(question => {
    //  console.log(question)
    //  return <li key = {question.id}>{question.question}</li>
   // })

  return (
    <GroceryList />
    
  )
}

export default App
