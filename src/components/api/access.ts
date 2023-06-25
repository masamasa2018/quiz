import axios from "axios";
import { CONFIG } from '../config';

const basePath = "/access";

interface AccessData {
  host: string;
  uri: string;
  uid: string | null;
}
//UIDを生成する
const insertAccess = async (host: string, uri: string, uid: string | null) => {
  const url = CONFIG.baseApiUrl + basePath;
  const data:AccessData = { host: host, uri: uri ,uid: uid };
  try {
    const res = await axios.post(url, data);
  } catch (error) {
    console.error(error);
  }
};
export default {
  insertAccess,
};