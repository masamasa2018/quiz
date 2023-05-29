import axios from "axios";

import { CONFIG } from '../config';

//UUIDを生成する
const getAll = async () => {
  let quizzesData: any = [];
  const url = CONFIG.baseApiUrl + "/quiz"
  try {
    const res = await axios.get(url)
    quizzesData = res.data;
  } catch (error) {
    console.error(error);
  }
  return quizzesData;
};

export default {
  getAll,
};