import db from "../../firebase";


async function getQuizAllData() {

  const quizzesData = [];
  const quizzesRef = db.collection('quizzes');
  const querySnapshotQuizzes = await quizzesRef.get();
  querySnapshotQuizzes.forEach((doc) => {
    quizzesData.push(doc.data());
  })
  // console.log(quizzesData);

  const allData = quizzesData;
  // const xxxx = allData.filter(
  //   a => a.category == 1 && a.code == 1 
  //   );
  
  
  // const allData: any = [
  //   {
  //     id: 1,
  //     category_id :1,
  //     question: "ユーミン(荒井由実)のデビューアルバムは？",
  //     answers: { 1: "ミスリム", 2: "ひこうき雲", 3: "14番目の月" },
  //     correct_id: 2,
  //     info: "『ひこうき雲』（ひこうき雲は、荒井由実（現：松任谷由実）の1枚目のアルバム。aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  //   },
  //   {
  //     id: 2,
  //     category_id :1,
  //     question: "ユーミンの実家は呉服屋です。その所在地は？",
  //     answers: { 1: "尼崎", 2: "渋谷", 3: "八王子" },
  //     correct_id: 3,
  //     info: "bbbbb",
  //   },
  //   {
  //     id: 3,
  //     category_id :1,
  //     question: "ユーミンの実家は何屋さん？",
  //     answers: { 1: "呉服屋さん", 2: "自転車屋さん" },
  //     correct_id: 1,
  //     info: "bbbbb",
  //   },
  //   {
  //     id: 4,
  //     category_id :1,
  //     question:
  //       "ユーミンが最も影響をうけたとされるアーティストであるプロコルハルムのヒット曲は？",
  //     answers: { 1: "ノルウェーの森", 2: "青い影", 3: "雨にぬれれば" },
  //     correct_id: 2,
  //     info: "bbbbb",
  //   },

  //   {
  //     category_id: 2,
  //     id: 1,
  //     question:
  //       "はっぴいえんどは当時フォークの神様とされていた岡林信康のバックバンドとして活動していた。\nその当時開催されたウッドストックのような野外フェスに参加する。その野外フェスとは何？",
  //     answers: { 1: "中津川フォークジャンボリー 1969", 2: "中津川フォークジャンボリー 1970", 3: "中津川フォークジャンボリー 1971" },
  //     correct_id: 2,
  //     info: "1968年にデビューした岡林は一世を風靡しフォークの神様と言われていたが、岡林は周囲が押しつけてくるイメージと本人の志向のギャップがかけ離れていたことに悩み一時期蒸発することとなった。\nその復活後、ボブ・ディラン&ザ・バンドに影響を受けたロックを当時無名であったはっぴんえんどと展開する。\n岡林信康withはっぴんえんどは活動時期は非常に短かったが、当時中津川フォークジャンボリー1970に出演して、数々の名演を残しており、1970年発表「見るまえに跳べ」のなかで、一発ではっぴいえんどとわかるようなオリジナリティあふれる演奏を堪能することができる。",
  //   },

  //   {
  //     category_id: 2,
  //     id: 2,
  //     question: "ティンパン・アレイの全身のバンド名は？",
  //     answers: { 1: "キャロル", 2: "ハックルバック", 3: "キャラメル・ママ",4: "頭脳警察" },
  //     correct_id: 3,
  //     info: "細野晴臣、鈴木茂、林立夫、松任谷正隆はキャラメル・ママ」名義で活動を始める。その後1974年にティン・パン・アレーにバンド名を変更する。このユニットは「ロック・バンド」というよりは、「音楽プロデュース・チーム」という色が強い。",
  //   },
  //   {
  //     category_id: 2,
  //     id: 3,
  //     question:
  //       "ティンパンアレイのベーシストである細野晴臣の相棒はもちろん林立夫である。だが同時期、レアではあるが細野晴臣、村上ポンタ秀一という異色の組み合わせもあった。その組み合わせが爆誕したのは、あるアーティストのレコーディングがきっかけであった。そのアーティストとは誰のことか？",
  //     answers: { 1: "荒井由実", 2: "山下達郎", 3: "大江千里",4: "吉田美奈子" },
  //     correct_id: 2,
  //     info: "山下達郎は1977年アルバム  「SPACY」を発表した。山下達郎はスタジオ・ミュージシャンへのこだわりが異常に強かった。その中で本人の妄想がきっかけで、村上秀一（ドラムス）、細野晴臣（ベース）、松木恒秀（ギター）、佐藤博（キーボード）という当時のスタジオミュージシャンの中でも屈指のライン・アップができ上がった。この四人の組みあわせは初めてであり緊張感を溢れる演奏となった。特に「LOVE SPACE 」は山下達郎を代表する名演となった。",
  //   },

  // ];


//  console.log(allData)

  return allData;
}

// 関数を定義します。
async function getQuizData(category_id: Number, id: Number) {
  // const allData = getQuizAllData();
  // console.log("2222");
  // console.log(allData);
  
  // const getData = allData.filter(a => a.code == code && a.category_id == 2);
       
  // const data = allData[id - 1];
  // console.log(getData);


  

  
  const quizzesData = [] 
  const quizzesRef = db.collection('quizzes') as CollectionReference;
  const querySnapshotQuizzes = await quizzesRef.get();
  querySnapshotQuizzes.forEach((doc) => {
    quizzesData.push(doc.data());
  })
  // console.log(quizzesData);
  console.log(typeof quizzesRef); 

  const allData = quizzesData as AAAAInfo;
  const getData = allData.filter(
     a => a.category == category_id && a.code == id 
  );
  
  console.log("wertdfasf")
  console.log(getData[0])

  return getData[0];
  
}

// //カテゴリ
// function getCategoryAllData() {
//   const categoryData = [
//     //ユーミン
//     { id: 1, parent_id: 1, name: "ノーマル" },
//     //ティンパン
//     { id: 2, parent_id: 2, name: "ノーマル" },
//   ];
//   return categoryData;
// }


// 関数を定義します。
//親データ
function getCategoryAllData() {
  const categoryData = [
    { id: 1, code: "1" , name:"ティンパン&はっぴえんど" , num:5 },
    { id: 2, code: "2" , name:"太陽にほえろ" , num:5},
    { id: 3, code: "3" , name:"キングクリムゾン" , num:5},
  ];
  return categoryData;
}

function getCategoryData(code) {

  const allData = getCategoryAllData();
  const getData = allData.filter(a => a.code == code);

  return getData[0];
}
// 関数をエクスポートします。
export default {
  getQuizAllData,
  getQuizData,
  getCategoryData,
};
