import db from "../../firebase";
import admin from 'firebase-admin'


function insert(name:String , email:String , message:String ) {
  db.collection("inquery").add({
    name: name,
    email: email,
    message: message,
    createAt: new Date() 
    // createAt: admin.firestore.Timestamp.now()
   })
}

// 関数をエクスポートします。
export default {
  insert,
  
};