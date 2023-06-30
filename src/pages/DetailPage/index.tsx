import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import PALETTE from "../../constants/palette";
import minuteToMs from "../../utils/minuteToMs";
import { getUrlFor10Years } from "../../apis/url";
import Text from "../../components/atoms/Text";
import Spinner from "../../components/atoms/Spinner";
import UrlListItem from "../../components/organisms/DetailPage/UrlListItem";
import * as S from "./index.styles";

const DetailPage = () => {
  const {
    state: { nickname, url },
  } = useLocation();

  const { isLoading, data: urlData } = useQuery(
    [url],
    () => getUrlFor10Years(url),
    {
      refetchOnWindowFocus: false,
      staleTime: minuteToMs(60),
      cacheTime: Infinity,
    }
  );

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Text variant="h1" color={PALETTE.BRAND500} weight={700}>
          {nickname}
        </Text>
        <Text variant="lg" color={PALETTE.WHITE300}>
          {url}
        </Text>
      </S.TitleWrapper>

      {isLoading || (
        <S.IntroWrapper>
          {urlData?.listAvailable && (
            <Text variant="sm" color={PALETTE.BRAND500}>
              최대 10년 간의 홈페이지를 확인할 수 있습니다.
              <br />
              매년 1월 1일에 가장 가까운 홈페이지로 이동하며, 정확한 날짜는 년도
              우측에 있습니다.
            </Text>
          )}

          {urlData?.listAvailable || (
            <Text variant="sm" color={PALETTE.BRAND500}>
              죄송합니다. 해당 사이트의 데이터가 존재하지 않습니다.
            </Text>
          )}
        </S.IntroWrapper>
      )}

      <S.ContentWrapper>
        {isLoading && <Spinner />}
        {isLoading ||
          urlData?.urlList.map((item) => (
            <UrlListItem key={item.year} {...item} />
          ))}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default DetailPage;
