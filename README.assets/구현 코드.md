# 구현 코드

### 사이트 별명 설정

```typescript
// /components/organisms/MainPage/SearchBar/index.tsx
...
<input
  placeholder="별명을 입력하세요. (최대 5자)"
  {...register("nickname", {
    required: MESSAGE_SEARCH_ERROR.NICKNAME_REQUIRED,
    maxLength: {
      value: 5,
      message: MESSAGE_SEARCH_ERROR.NICKNAME_LENGTH,
    },
  })}
/>
...
```

<br/>

### URL 파싱

``` typescript
// /components/organisms/MainPage/SearchBar/index.tsx
...
const onValid = ({ nickname, url }: FieldValues) => {
  ...

  const data: IWishlistItem = {
    nickname,
    url: urlParsing(url),
  };

  ...
};
...

// /utils/urlParsing.ts
const urlParsing = (url: string) => {
  let parsed_url = [];

  if (url.startsWith("http")) {
    parsed_url = url.split("://");
    parsed_url[0] += "://";
  } else {
    parsed_url = ["", url];
  }

  if (url.endsWith("/")) {
    parsed_url[1] = parsed_url[1].slice(0, -1);
  }

  return parsed_url;
};
```

<br/>

### URL 중복 검사

``` typescript
// /apis/url.ts
export const getUrlFor10Years = async (url: string) => {
  ...
  let timestampList: Array<string> = [];

  const urlList = Array.from({ length: 10 }, async (_, idx) => {
    ...
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
    ...
}
```

<br/>

### URL 목록 캐싱

``` typescript
// /pages/DetailPage/index.tsx
...
const { isLoading, data: urlData } = useQuery(
  [url],
  () => getUrlFor10Years(url),
  {
    refetchOnWindowFocus: false,
    staleTime: minuteToMs(60),
    cacheTime: Infinity,
  }
);
...
```