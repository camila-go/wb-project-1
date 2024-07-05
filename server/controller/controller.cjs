let questions = []
let questionId = 1
module.exports = {
    createQuestion: (req, res) => {
        const questionObj = req.body
        questionObj.id = questionId
        questionId += 1;
        questions.push(questionObj)
        res.status(200).send(questions)
    },
    getQuestions: (req,res) => {
        res.status(200).send(questions)
    },
    deleteQuestion: (req, res) => {
        const { id }  = req.query
        const index = questions.findIndex(questionObj => questionObj.id === +id)

        console.log({id})
        console.log({index})

        if (index > -1){
            questions.splice(index, 1)
            res.status(200).send(questions)
            return
        }
        console.log('An error occured, could not find the question stored')
        res.status(400).send([])
    }
}