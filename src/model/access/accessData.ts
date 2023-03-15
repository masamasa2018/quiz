import db from "../../firebase";
import admin from 'firebase-admin'


function insert(uri:String) {
  db.collection("access").add({
    uri: uri,
    createAt: new Date() 
    // createAt: admin.firestore.Timestamp.now()
   })
}

// 関数をエクスポートします。
export default {
  insert,
  
};