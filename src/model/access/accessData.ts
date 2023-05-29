// import db from "../../firebase";
// import admin from 'firebase-admin'

import access from '../../components/api/access'
import util from '../../components/util'

async function insert() {

  if (location.host.match(/localhost/)) {
    console.log("ssssss");
  } else {
    const uuid: string | null = util.getUuid();
    await access.insertAccess(location.host, location.pathname, uuid);
    // db.collection("access").add({
    //   uri: location.pathname,
    //   host: location.host,
    //   createAt: new Date() 
    //  })
  }
}

export default {
  insert,
  
};