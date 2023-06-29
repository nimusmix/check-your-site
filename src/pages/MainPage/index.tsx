import Text from "../../components/atoms/Text";
import SearchBar from "../../components/organisms/MainPage/SearchBar";
import Wishlist from "../../components/organisms/MainPage/Wishlist";
import PALETTE from "../../constants/palette";
import * as S from "./index.styles";

const MainPage = () => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Text variant="h1" color={PALETTE.BRAND500} weight={700}>
          CHECK YOUR SITE
        </Text>
        <Text variant="base" color={PALETTE.WHITE300}>
          관심 있는 사이트의 역사가 궁금하다면?
        </Text>
      </S.TitleWrapper>

      <SearchBar />
      <Wishlist />
    </S.Wrapper>
  );
};

export default MainPage;
