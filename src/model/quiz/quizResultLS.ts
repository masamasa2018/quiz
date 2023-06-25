//クイズ結果を取得
function getQuizResult(category: number) {
  const QuizResultLS = localStorage.getItem("quizResult" + category);
  if (QuizResultLS !== null) {
    const QuizResultArray = JSON.parse(QuizResultLS);
    return QuizResultArray;
  } else {
    return;
  }
}
//クイズ結果を削除
function deleteQuizResult(category:number) {
  localStorage.removeItem("quizResult" + category);
}
//クイズ結果を保存
function saveQuizResult(category:number,  code :number , correctFlag :boolean) {
  const resultArray: { [key: string]: boolean } = {}
  const quizResultLS = localStorage.getItem("quizResult" + category);

  //新規
  if(quizResultLS == null){
    resultArray[code] = correctFlag;
  //LSから既存レコードから取得して変更
  } else {
    const quizResultJsonParse = JSON.parse(quizResultLS);
    const quizResultkeyList = Object.keys(quizResultJsonParse);

    for (const key in quizResultkeyList){
      const tmpKey = quizResultkeyList[key];
      const tmpValue = quizResultJsonParse[quizResultkeyList[key]];
      resultArray[tmpKey] = tmpValue;
    }
    resultArray[code] = correctFlag;
  }
  localStorage.setItem("quizResult" + category,  JSON.stringify(resultArray) );
}

export default {
  getQuizResult,
  deleteQuizResult,
  saveQuizResult,
};
