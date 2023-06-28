import { useRecoilValue } from "recoil";
import Text from "../../components/atoms/Text";
import SearchBar from "../../components/organisms/MainPage/SearchBar";
import WishlistItem, {
  IWishlistItem,
} from "../../components/organisms/MainPage/WishlistItem";
import WishlistNoItem from "../../components/organisms/MainPage/WishlistNoItem";
import PALETTE from "../../constants/palette";
import wishlistState from "../../recoil/wishlistState";
import * as S from "./index.styles";

const MainPage = () => {
  const wishlist = useRecoilValue(wishlistState);

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Text variant="h1" color={PALETTE.BRAND500} weight={700}>
          CHECK YOUR SITE
        </Text>
        <Text variant="base" color={PALETTE.WHITE300}>
          내가 관심 있는 사이트의 역사가 궁금하다면? 궁금한 블라블라
        </Text>
      </S.TitleWrapper>

      <SearchBar />

      <S.WishlistWrapper>
        {wishlist.map((item: IWishlistItem, idx) => (
          <WishlistItem key={idx} {...item} idx={idx + 1} />
        ))}
        {Array.from({ length: 4 - wishlist.length }, (_, idx) => (
          <WishlistNoItem key={idx} />
        ))}
      </S.WishlistWrapper>
    </S.Wrapper>
  );
};

export default MainPage;
