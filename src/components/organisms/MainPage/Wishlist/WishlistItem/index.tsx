import { useState, memo } from "react";
import { FaTrashAlt as IconTrash, FaEye as IconEye } from "react-icons/fa";
import { HiOutlineArrowRight as IconArrow } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import PALETTE from "../../../../../constants/palette";
import wishlistState from "../../../../../recoil/wishlistState";
import Text from "../../../../atoms/Text";
import * as S from "./index.styles";
export interface IWishlistItem {
  nickname: string;
  url: Array<string>;
}

interface IWishlistItemProps extends IWishlistItem {
  idx: number;
}

const WishlistItem = ({ idx, nickname, url }: IWishlistItemProps) => {
  console.log(`🔔 wishlistitem ${nickname}`);
  const [isHovered, setIsHovered] = useState(false);
  const [wishlist, setWishlist] = useRecoilState(wishlistState);
  const navi = useNavigate();

  const hoverColors = [PALETTE.WHITE300, PALETTE.BRAND500];

  const onDeleteClick = () => {
    const newWishlist = [...wishlist];
    newWishlist.splice(idx - 1, 1);
    setWishlist(newWishlist);
    setIsHovered(false);
  };

  return (
    <S.WishlistItemWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <S.Hovered colors={hoverColors}>
          <div
            onClick={() =>
              navi(`/detail/${idx}`, { state: { nickname, url: url.join("") } })
            }
          >
            <IconEye />
            <Text variant="base">이동</Text>
          </div>
          <div onClick={onDeleteClick}>
            <IconTrash />
            <Text variant="base">삭제</Text>
          </div>
        </S.Hovered>
      )}

      {isHovered || (
        <S.NotHovered>
          <Text variant="h4" color={PALETTE.BRAND500} weight={600}>
            {idx}
          </Text>
          <Text variant="h4" color={PALETTE.BLACK300} weight={600}>
            {nickname}
          </Text>
          <Text variant="base" color={PALETTE.WHITE300}>
            {url[1]}
          </Text>
          <IconArrow onClick={onDeleteClick} color={PALETTE.BRAND500} />
        </S.NotHovered>
      )}
    </S.WishlistItemWrapper>
  );
};

export default memo(WishlistItem);
