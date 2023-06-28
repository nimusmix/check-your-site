import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import PALETTE from "../../constants/palette";
import Text from "../../components/atoms/Text";
import { getUrlFor10Years } from "../../components/apis/url";
import UrlListItem, {
  IUrlListItem,
} from "../../components/organisms/DetailPage/UrlListItem";
import Spinner from "../../components/atoms/Spinner";
import * as S from "./index.styles";

const DetailPage = () => {
  const {
    state: { nickname, url },
  } = useLocation();

  const [listAvailable, setListAvailable] = useState(true);

  const { isLoading, data: urlList } = useQuery<Array<IUrlListItem>>(
    [nickname, url],
    () => getUrlFor10Years(url),
    {
      onSuccess: (data) => {
        const availableUrlList = data.filter((d) => d.available);
        if (availableUrlList.length === 0) {
          setListAvailable(false);
        }
      },
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

      <S.IntroWrapper>
        {listAvailable && (
          <Text variant="sm" color={PALETTE.BRAND500}>
            최대 10년 간의 홈페이지를 확인할 수 있습니다.
            <br />
            매년 1월 1일에 가장 가까운 홈페이지로 이동하며, 정확한 날짜는 년도
            우측에 있습니다.
          </Text>
        )}

        {listAvailable || (
          <Text variant="sm" color={PALETTE.BRAND500}>
            죄송합니다. 해당 사이트의 데이터가 존재하지 않습니다.
          </Text>
        )}
      </S.IntroWrapper>

      <S.ContentWrapper>
        {isLoading && <Spinner />}
        {isLoading ||
          urlList?.map((item) => <UrlListItem key={item.year} {...item} />)}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default DetailPage;
