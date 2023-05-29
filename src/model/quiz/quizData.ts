
import quizApi from "../../components/api/quiz";


interface quizData {
  category: number;
  code: number;
  question: string;
  correct_code: number;
  info: string;
  answers: string[];
}

// 関数を定義します。
async function getQuizData(category_id: number, id: number) {

  const allData: quizData[] = await quizApi.getAll();
  const getData: quizData[] = allData.filter(
     a => a.category == category_id && a.code == id 
  );
  return getData[0];
}


interface Category {
  id: number;
  code: string;
  name: string;
  num: number;
  start_info: string;
  result_info: string;
}

// 関数を定義します。
//親データ
function getCategoryAllData() {

  const categoryData: Category[] = [
    {
      id: 1,
      code: "1",
      name: "ティン・パン・アレー＆はっぴいえんど",
      num: 5,
      start_info: "はっぴいえんどマニア、ティン・パンのマニア捧げるクイズです。",
      result_info:
        "お楽しみいただけましたでしょうか。ぜひ他の問題もチェレンジしてください",
    },
    {
      id: 2,
      code: "2",
      name: "太陽にほえろ",
      num: 5,
      start_info: "昭和の刑事ドラマの金字塔「太陽にほえろ」の問題です",
      result_info:
        "お楽しみいただけましたでしょうか。ぜひ他の問題もチェレンジしてください",
    },
    {
      id: 3,
      code: "3",
      name: "キング・クリムゾン",
      num: 5,
      start_info: "初期キング・クリムゾン（1974まで）の問題です",
      result_info:
        "お楽しみいただけましたでしょうか。ぜひ他の問題もチェレンジしてください",
    },
  ];

  return categoryData;
}

function getCategoryData(code: number) {
  const allData: Category[] = getCategoryAllData();
  const getData: Category[] = allData.filter(a => Number(a.code) == code);

  return getData[0];
}
// 関数をエクスポートします。
export default {
  getQuizData,
  getCategoryData,
};
