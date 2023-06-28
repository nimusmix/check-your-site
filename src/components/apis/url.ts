import axios from "axios";
import dateToString from "../../utils/dateToString";
import { IUrlListItem } from "../organisms/DetailPage/UrlListItem";

const BASE_URL = 'http://archive.org/wayback/available';

export const getUrlFor10Years = async (url: string) => {
  const today = new Date();
  const thisYear = today.getFullYear();

  const urlList = await Array.from({ length: 10 }, async (_, idx) => {
    const year = thisYear - idx;
    let available = false;
    let availableUrl = '';
    let date = new Date(`${year}-01-01`);

    const res = await axios.get(BASE_URL, { params: { url, timestamp: `${year}0101` } });
    const data = res.data.archived_snapshots;

    if (Object.keys(data).length !== 0) {
      available = data.closest.available;
      availableUrl = data.closest.url;
      const timestamp = data.closest.timestamp;
      const yyyy = timestamp.slice(0, 4);
      const mm = timestamp.slice(4, 6);
      const dd = timestamp.slice(6, 8);
      date = new Date(`${yyyy}-${mm}-${dd}`)
    }

    const urlItem: IUrlListItem = await {
      year,
      date: dateToString(date),
      available,
      availableUrl
    };

    return urlItem;
  })

  return Promise.all(urlList);
};