import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import PALETTE from "../../constants/palette";
import Text from "../../components/atoms/Text";
import { getUrlFor10Years } from "../../components/apis/url";
import UrlListItem, {
  IUrlListItem,
} from "../../components/organisms/DetailPage/UrlListItem";
import * as S from "./index.styles";

const DetailPage = () => {
  const {
    state: { nickname, url },
  } = useLocation();

  const { isLoading, data: urlList } = useQuery<Array<IUrlListItem>>(
    nickname,
    () => getUrlFor10Years(url)
  );

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Text variant="h1" color={PALETTE.BRAND500} weight={700}>
          {nickname}
        </Text>
        <Text variant="lg" color={PALETTE.BLACK300}>
          {url}
        </Text>
      </S.TitleWrapper>

      {isLoading ? (
        <p>로딩중</p>
      ) : (
        urlList?.map((item) => <UrlListItem key={item.year} {...item} />)
      )}
    </S.Wrapper>
  );
};

export default DetailPage;
