const fs = require('fs');

let getQuizObj = () => {
    try {
        const data = fs.readFileSync('files/tmp2.json', 'utf8')
        // console.log(data)
        return (data)
    } catch (err) {
        console.error(err)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let quizObj = JSON.parse(getQuizObj())
let no = getRandomInt(Object.keys(quizObj).length)
let randomQuestion = quizObj[no]
console.log(no);
console.log(randomQuestion.question);
console.log(randomQuestion.answer);
