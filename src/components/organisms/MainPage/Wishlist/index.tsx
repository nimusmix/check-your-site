import { useRecoilValue } from "recoil";
import wishlistState from "../../../../recoil/wishlistState";
import * as S from "./index.styles";
import WishlistItem, { IWishlistItem } from "./WishlistItem";
import WishlistNoItem from "./WishlistNoItem";

const Wishlist = () => {
  const wishlist = useRecoilValue(wishlistState);

  return (
    <S.Wrapper>
      {wishlist.map((item: IWishlistItem, idx) => (
        <WishlistItem key={item.url[1]} {...item} idx={idx + 1} />
      ))}
      {Array.from({ length: 4 - wishlist.length }, (_, idx) => (
        <WishlistNoItem key={idx} />
      ))}
    </S.Wrapper>
  );
};

export default Wishlist;
