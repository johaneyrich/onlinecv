const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('files/skikort.csv'),
    // output: process.stdout,
    // output: Object.assign(qa, {answer: line.substring(0, line.indexOf(";")), question: line.substring(line.indexOf(";"+1, line.length))} ),
    
    console: false
});

let qa = {};
let text = "";
let counter = 0;
readInterface.on('line', function(line) {
    // console.log(line);
    // console.log(line.indexOf(";"));
    // Object.apply(qa, {answer: line.substring(0, line.indexOf(";")), question: line.substring(line.indexOf(";"+1, line.length))} )
    // qa.push({answer: line.substring(0, line.indexOf(";")), question: line.substring(line.indexOf(";"+1, line.length))})
    // console.log(line.length);

   text += `{'question':'${line.substring(0, line.indexOf(";"))}', 'answer':'${line.substring(line.indexOf(";")+1, line.length)}'},\n`
    
    
    // fs.writeFile("files/tmp.json", `{answer: ${line.substring(0, line.indexOf(";"))}, question: ${line.substring(line.indexOf(";")+1, line.length)}}`, (err)=> {
        // console.log("err",err);
    // })

    // qa["set"+counter].question = line.substring(0, line.indexOf(";"));
    // qa["set"+counter].answer = line.substring(line.indexOf(";")+1, line.length)
    qa[counter] = {'question':`${line.substring(0, line.indexOf(";"))}`, 'answer':`${line.substring(line.indexOf(";")+1, line.length)}`}
    counter++
}).on('close', function () {
    console.log("text",text);
    fs.writeFile("files/tmp2.json", JSON.stringify(qa,null,4), (err) => {
        console.log("err:",err);
    })
});;


// fs.writeFile("files/tmp.json", qa, (err)=>{
//     console.log(err);
// })


// setTimeout(() => {
//     fs.writeFile("files/tmp.json", text, (err) => {
//         console.log("err:",err);
//     })
// }, 5000);