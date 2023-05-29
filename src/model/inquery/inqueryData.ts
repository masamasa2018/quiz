// import db from "../../firebase";
// import admin from 'firebase-admin'
import inquery from '../../components/api/inquery'


async function insert(name: string, email: string, message: string) {
  
  await inquery.insertInquery(name , email, message);
  // db.collection("inquery").add({
  //   name: name,
  //   email: email,
  //   message: message,
  //   createAt: new Date() 
  //   // createAt: admin.firestore.Timestamp.now()
  //  })
}

// 関数をエクスポートします。
export default {
  insert,
  
};