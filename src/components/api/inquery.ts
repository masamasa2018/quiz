import axios from "axios";
import { CONFIG } from '../config';

const basePath = "/inquery";

interface InqueryData {
  name: string;
  email: string;
  message: string;
}
//UIDを生成する
const insertInquery = async (name :string ,email :string , message :string) => {
  const url: string = CONFIG.baseApiUrl + basePath;
  const data: InqueryData = { name: name, email: email, message: message};
  try {
    const res = await axios.post(url, data);
  } catch (error) {
    console.error(error);
  }

};
export default {
  insertInquery,
};