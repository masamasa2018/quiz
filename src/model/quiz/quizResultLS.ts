//クイズ結果を取得
function getQuizResult(categoryId: number) {
  const QuizResultLS = localStorage.getItem("quizResult" + categoryId);
  if (QuizResultLS !== null) {
    const QuizResultArray = JSON.parse(QuizResultLS);
    return QuizResultArray;
  } else {
    return;
  }
}

//クイズ結果を削除
function deleteQuizResult(categoryId:number) {
  localStorage.removeItem("quizResult" + categoryId);
}

//クイズ結果を保存
function saveQuizResult(categoryId:number,  id :number , correctFlag :boolean) {
  const resultArray: { [key: string]: boolean } = {}
  const quizResultLS = localStorage.getItem("quizResult" + categoryId);

  //新規
  if(quizResultLS == null){
    resultArray[id] = correctFlag;
  //LSから既存レコードから取得して変更
  } else {
    const quizResultJsonParse = JSON.parse(quizResultLS);
    const quizResultkeyList = Object.keys(quizResultJsonParse);

    for (const key in quizResultkeyList){
      const tmpKey = quizResultkeyList[key];
      const tmpValue = quizResultJsonParse[quizResultkeyList[key]];
      resultArray[tmpKey] = tmpValue;
    }
    resultArray[id] = correctFlag;
  }
  localStorage.setItem("quizResult" + categoryId,  JSON.stringify(resultArray) );
}

export default {
  getQuizResult,
  deleteQuizResult,
  saveQuizResult,
};
