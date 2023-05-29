import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import quizResultLS from '../model/quiz/quizResultLS';


const route = useRoute()
const router = useRouter()

//UUIDをローカルストレージから取得する
const getUuid = () => {

  let getUuid: string | null = getUuidLS();
  
  if (!getUuid) {
    const uuid: string = getUniqueStr();
    localStorage.setItem('uuid', uuid)
    getUuid = getUuidLS();
  }
  return getUuid;

};


//UUIDを生成する
const getUniqueStr = (myStrong?: any) => {
  let strong = 1000;
  if (myStrong) strong = myStrong;
  const uuid :string = new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
  return uuid;
};

//UUIDをローカルストレージから取得する
const getUuidLS = () => {
  const getUuid: string | null = localStorage.getItem("uuid");
  return getUuid;
};

// ブラウザバックを無効化
const invalidateBack = () => {
  addEventListener("popstate", () => {
    const uri = route.path;
    router.push(uri);
  })
};


function getQuizResultNum(categoryId: number, allNum: number): number {
  const corrctResult = quizResultLS.getQuizResult(categoryId);
  let corrctNum: number = 0;
  for (let i: number = 1; i <= allNum; i++) { 
    if (corrctResult[i] == true) {
      corrctNum = corrctNum + 1;
    }
  }
  return corrctNum;
}

function getQuizResultSummary(categoryId:number , id:number , allNum:number){

  const corrctResult = quizResultLS.getQuizResult(categoryId);
  const allCount:number = allNum;
  const summury: string[] = [];
  for (let i: number = 1; i <= allCount; i++) {
    summury[i] = "none";

    if(i == id ){
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
  getUuidLS,
  invalidateBack,
  getUuid,

  getQuizResultSummary,
  getQuizResultNum,
};