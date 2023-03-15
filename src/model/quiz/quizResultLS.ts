function getQuizResult(categoryId:number) {
  const QuizResultLS = localStorage.getItem("quizResult" + categoryId);
  const QuizResultArray = JSON.parse(QuizResultLS);
  // console.log("seta888")
  // console.log(QuizResultArray[2])
  return QuizResultArray;
}

function deleteQuizResult(categoryId:number) {
  localStorage.removeItem("quizResult" + categoryId);
}


//function saveQuizResult(categoryId:number,  key :string , value :boolean) {
function saveQuizResult(categoryId:number,  key :number , value :boolean) {
  const resultArray: { [key: string]: boolean } = {}
  const quizResultLS = localStorage.getItem("quizResult" + categoryId);

  if(quizResultLS == null){
    resultArray[key] = value;
  } else {
    const quizResultJsonParse = JSON.parse(quizResultLS);
    const quizResultkeyList = Object.keys(quizResultJsonParse)

    for (const key in quizResultkeyList){
      const tmpKey = quizResultkeyList[key];
      const tmpValue = quizResultJsonParse[quizResultkeyList[key]];
      resultArray[tmpKey] = tmpValue;
    }
    resultArray[key] = value;
  }

  localStorage.setItem("quizResult" + categoryId,  JSON.stringify(resultArray) );

}



// 関数をエクスポートします。
export default {
  getQuizResult,
  deleteQuizResult,
  saveQuizResult,
};
