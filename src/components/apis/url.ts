import axios from "axios";
import dateToString from "../../utils/dateToString";
import { IUrlListItem } from "../organisms/DetailPage/UrlListItem";

const BASE_URL = 'http://archive.org/wayback/available';

export const getUrlByTimestamp = async (url: string, timestamp: string) => {
  const res = await axios.get(BASE_URL, { params: { url, timestamp } });
  return res.data.archived_snapshots;
};

export const getUrlFor10Years = async (url: string) => {
  const today = new Date();
  const thisYear = today.getFullYear();
  let timestampList: Array<string> = [];

  const urlList = Array.from({ length: 10 }, async (_, idx) => {
    const year = thisYear - idx;
    let available = false;
    let availableUrl = '';
    let date = new Date(`${year}-01-01`);

    const data = await getUrlByTimestamp(url, `${year}0101`);

    // 데이터가 있으면
    if (Object.keys(data).length !== 0) {
      const timestamp = data.closest.timestamp;
      // 데이터 중복 검사
      if (!timestampList.includes(timestamp)) {
        available = data.closest.available;
        availableUrl = data.closest.url;

        const yyyy = timestamp.slice(0, 4);
        const mm = timestamp.slice(4, 6);
        const dd = timestamp.slice(6, 8);
        date = new Date(`${yyyy}-${mm}-${dd}`)

        timestampList = [...timestampList, timestamp];
      }
    }

    const urlItem: IUrlListItem = {
      year,
      date: dateToString(date),
      available,
      availableUrl
    };
    return urlItem;
  })

  const availableList = (await Promise.all(urlList)).filter((item) => item.available);
  const listAvailable = availableList.length > 0;
  const urlData = {
    listAvailable,
    urlList: availableList
  }

  return urlData;
}