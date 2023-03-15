import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import quizResultLS from '../model/quiz/quizResultLS';


const route = useRoute()
const router = useRouter()

//UUIDを生成する
const getUniqueStr = (myStrong?: any) => {
  let strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
};

//UUIDをローカルストレージから取得する
const getUuidLS = () => {
  const getUuid: string | null = localStorage.getItem("uuid");
  return getUuid;
};


//クイズ結果をローカルストレージへ保存する
// const saveQuizResult = (key:String , value:boolean ) => {
//   const quizResultLS = localStorage.getItem("quizResult");
//   const array = {}
//   if(! quizResultLS){
    
//     array[key] = value;
  
//   } else {
    
//     const uuuuu = JSON.parse(quizResultLS);
//     console.log("xxxxx")
//     console.log(uuuuu["1-1"])

//   }

//   if (window.localStorage) {
//     localStorage.setItem("quizResult", JSON.stringify(array));
//   }
//   const aaaaa = localStorage.getItem("quizResult");
//   console.log("bbb")
//   console.log(aaaaa)
  

// };

//クイズ結果をローカルストレージへ保存する
// const saveDictionaryBooleanLS = (key:String , value:boolean ) => {
//    const array = {};
//    array[key] = value;
//    if (window.localStorage) {
//      localStorage.setItem(key, JSON.stringify(array));
//    }
// };

//クイズ結果をローカルストレージから取得
// const getDictionaryLS = (key: String) => {
//   const getValueLS = localStorage.getItem(key);
  
//   const getArray = JSON.parse(getValueLS);
  
//   console.log("xxxx" + getArray)
//   console.log("xxxx" + getArray["1-1"])
//   return getArray;
// };

// ブラウザバックを無効化
const invalidateBack = () => {
  addEventListener("popstate", () => {
    const uri = route.path;
    router.push(uri);
  })
};

function getResultSummary(categoryId:number , id:number , allNum:number){

  const corrctResult = quizResultLS.getQuizResult(categoryId);
  const allCount:number = allNum;
  const summury: string[] = [];
  for (let i: number = 1; i <= allCount; i++) {
    summury[i] = "none";

    if(i == id ){
      summury[i] = "now";
    }
    // if(corrctResult[categoryId + "-"+ i] != undefined){

    //   if(corrctResult[categoryId + "-" + i] == true){
    //     summury[i] = "correct";
    //   } else {
    //     summury[i] = "incorrect";
    //   }
    // }
    // console.log("xxxxxxxxxx----")
    // console.log(corrctResult)
    if(corrctResult){
      if(corrctResult[i] != undefined){

        if(corrctResult[i] == true){
          summury[i] = "correct";
        } else {
          summury[i] = "incorrect";
        }
      }
    }



  }
  return summury;

}

export default {
  getUniqueStr,
  getUuidLS,
  invalidateBack,
  // saveDictionaryBooleanLS,
  // getDictionaryLS,
  // saveQuizResult,
  getResultSummary,
};