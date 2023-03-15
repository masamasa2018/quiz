<template>
  <div>
    <h1>Firestore Test</h1>
    <li v-for="(item, index) in data" :key="index">
      {{ item }}
    </li>
  </div>
</template>

<script lang="ts">
import { is } from "@babel/types";
import db from "../firebase";
import quizData from "../model/quiz/quizData"; 

console.log("xxxx");
console.log(quizData.getCategoryData(1));

// console.log("xxxxxxxxxx")

// var aaaaa  = quizResultLS.getQuizResult();

// localStorage.removeItem("quizResult");

//quizResultLS.getQuizResult(1);

// deleteQuizResult();

// var aaaaa = quizResultLS.getQuizResult(1);
// console.log(aaaaa);
// // console.log(bbbb)
// const cccc = JSON.parse(bbbb);
// console.log(cccc["1-3"])

// var aaaaKey:number = 2;
// var bbbbValue:boolean = false;
// quizResultLS.saveQuizResult(1, aaaaKey,bbbbValue);

//saveQuizResult(aaaaKey,bbbbValue)

// function getQuizResult() {
//   const QuizResultLS = localStorage.getItem("quizResult");
//   const QuizResultArray = JSON.parse(QuizResultLS);
//   return QuizResultArray;
// }

// function deleteQuizResult() {
//   localStorage.removeItem("quizResult");
// }

// function saveQuizResult(key :string , value :boolean) {

//     let resultArray: { [key: string]: boolean } = {}

//     const quizResultLS = localStorage.getItem("quizResult");

//     if(quizResultLS == null){
//       resultArray[key] = value;
//     } else {
//       const quizResultJsonParse = JSON.parse(quizResultLS);
//       const quizResultkeyList = Object.keys(quizResultJsonParse)

//       for (let key in quizResultkeyList){
//         var tmpKey = quizResultkeyList[key];
//         var tmpValue = quizResultJsonParse[quizResultkeyList[key]];
//         resultArray[tmpKey] = tmpValue;
//       }
//       resultArray[key] = value;
//     }

//     localStorage.setItem("quizResult",  JSON.stringify(resultArray) );


// }



function isJson(data) {
	try {
		JSON.parse(data);
	} catch (error) {
		return false;
	}
	return true;
}


export default {
 data() {
   return {
     data: [],
   }
 },
 mounted: function () {

const data = { uri: "https://yahoo.com" }
db.collection("access").doc("url").set(data)

  //  db.collection("test")
  //    .get()
  //    .then((querySnapshot) => {
  //      querySnapshot.forEach((doc) => {
  //        console.log(`${doc.id} => ${doc.data().name}`)
  //        this.data.push(doc.data().name)
  //      })
  //    })


 },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
