import axios from "axios";
import { CONFIG } from '../config';

const basePath = "/access";

interface AccessData {
  host: string;
  uri: string;
  uuid: string | null;
}
//UUIDを生成する
const insertAccess = async (host: string, uri: string, uuid: string | null) => {
  const url = CONFIG.baseApiUrl + basePath;
  const data:AccessData = { host: host, uri: uri ,uuid: uuid };
  try {
    const res = await axios.post(url, data);
  } catch (error) {
    console.error(error);
  }
};
export default {
  insertAccess,
};