import access from "../../components/api/access";
import util from "../../components/util";

async function insert() {
  if (location.host.match(/localhost/)) {
    //console.log("ssssss");
  } else {
    const uid: string | null = util.getUid();
    await access.insertAccess(location.host, location.pathname, uid);
  }
}

export default {
  insert,
};