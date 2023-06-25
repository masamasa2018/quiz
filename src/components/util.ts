import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import quizResultLS from '../model/quiz/quizResultLS';


const route = useRoute()
const router = useRouter()

//UIDをローカルストレージから取得する
const getUid = () => {

  let getUid: string | null = getUidLS();
  
  if (!getUid) {
    const uid: string = getUniqueStr();
    localStorage.setItem('uid', uid)
    getUid = getUidLS();
  }
  return getUid;

};


//UIDを生成する
const getUniqueStr = (myStrong?: any) => {
  let strong = 1000;
  if (myStrong) strong = myStrong;
  const uid :string = new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
  return uid;
};

//UIDをローカルストレージから取得する
const getUidLS = () => {
  const getUid: string | null = localStorage.getItem("uid");
  return getUid;
};

// ブラウザバックを無効化
const invalidateBack = () => {
  addEventListener("popstate", () => {
    const uri = route.path;
    router.push(uri);
  })
};


function getQuizResultNum(category: number, allNum: number): number {
  const corrctResult = quizResultLS.getQuizResult(category);
  let corrctNum: number = 0;
  for (let i: number = 1; i <= allNum; i++) { 
    if (corrctResult[i] == true) {
      corrctNum = corrctNum + 1;
    }
  }
  return corrctNum;
}

function getQuizResultSummary(category:number , code:number , allNum:number){

  const corrctResult = quizResultLS.getQuizResult(category);
  const allCount:number = allNum;
  const summury: string[] = [];
  for (let i: number = 1; i <= allCount; i++) {
    summury[i] = "none";

    if(i == code ){
      summury[i] = "now";
    }
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
  getUidLS,
  invalidateBack,
  getUid,

  getQuizResultSummary,
  getQuizResultNum,
};