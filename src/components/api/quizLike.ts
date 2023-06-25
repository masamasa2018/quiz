import axios from "axios";
import { CONFIG } from '../config';

const basePath = "/quizLike";
const countPath = "/quizLikeCount";
const countByUidPath = "/quizLikeCountByUid";

interface likeData {
  category: number;
  code: number;
  uid: string | null;
}

const getLike = async (category: number, code: number) => {
  let countData: any = [];
  const url = CONFIG.baseApiUrl + countPath + "/" + category + "/" + code;
  try {
    const res = await axios.get(url);
    countData = res.data;
  } catch (error) {
    console.error(error);
  }
  return countData;
};

const getLikeByUid = async (
  category: number,
  code: number,
  uid: string | null
) => {
  let countData: any = [];
  const url =
    CONFIG.baseApiUrl + countByUidPath + "/" + category + "/" + code + "/" + uid;
  try {
    const res = await axios.get(url);
    countData = res.data;
  } catch (error) {
    console.error(error);
  }
  return countData;
};

const insertLike = async (
  category: number,
  code: number,
  uid: string | null
) => {
  const url = CONFIG.baseApiUrl + basePath;
  const data:likeData = {  category: category,code: code, uid: uid };
  try {
    const res = await axios.post(url, data);
  } catch (error) {
    console.error(error);
  }
};
const deleteLike = async (
  category: number,
  code: number,
  uid: string | null
) => {
  const url = CONFIG.baseApiUrl + basePath;
  const payload = {
    category: category,
    code: code,
    uid : uid,
  }

  try {
    axios.delete(url, {
      data: payload,
    })

  } catch (error) {
    console.error(error);
  }
};

export default {
  insertLike,
  deleteLike,
  getLike,
  getLikeByUid,
};