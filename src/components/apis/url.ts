import axios from "axios";
import dateToString from "../../utils/dateToString";
import { IUrlListItem } from "../organisms/DetailPage/UrlListItem";

const BASE_URL = 'http://archive.org/wayback/available';

export const getUrlFor10Years = async (url: string) => {
  const today = new Date();
  const thisYear = today.getFullYear();
  let timestampList: Array<string> = [];

  const urlList = Array.from({ length: 10 }, async (_, idx) => {
    const year = thisYear - idx;
    let available = false;
    let availableUrl = '';
    let date = new Date(`${year}-01-01`);

    const res = await axios.get(BASE_URL, { params: { url, timestamp: `${year}0101` } });
    const data = res.data.archived_snapshots;

    // 데이터가 있으면
    if (Object.keys(data).length !== 0) {
      const timestamp = data.closest.timestamp;
      // 이미 수신한 날짜가 아니면
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
  
  return Promise.all(urlList);
}