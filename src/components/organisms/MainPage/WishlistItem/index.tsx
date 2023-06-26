import { useState } from "react";
import { FaTrashAlt as IconTrash, FaEye as IconEye } from "react-icons/fa";
import { HiOutlineArrowRight as IconArrow } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import PALETTE from "../../../../constants/palette";
import wishlistState from "../../../../recoil/wishlistState";
import Text from "../../../atoms/Text";
import * as S from "./index.styles";
export interface IWishlistItem {
  nickname: string;
  url: Array<string>;
}

interface IWishlistItemProps extends IWishlistItem {
  idx: number;
}

const WishlistItem = ({ idx, nickname, url }: IWishlistItemProps) => {
  const [hovered, setHovered] = useState(false);
  const [wishlist, setWishlist] = useRecoilState(wishlistState);
  const navi = useNavigate();

  const hoverColors = [PALETTE.WHITE300, PALETTE.BRAND500];

  const onDeleteClick = () => {
    const newWishlist = [...wishlist];
    newWishlist.splice(idx, 1);
    setWishlist(newWishlist);
    setHovered(false);
  };

  return (
    <S.WishlistItemWrapper
      className={hovered ? "hovered" : ""}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <S.NotHovered className="not-hovered">
        <Text variant="h4" color={PALETTE.BRAND500} weight={600}>
          {idx + 1}
        </Text>
        <Text variant="h4" color={PALETTE.BLACK300} weight={600}>
          {nickname}
        </Text>
        <Text variant="base" color={PALETTE.WHITE300}>
          {url[1]}
        </Text>

        <IconArrow onClick={onDeleteClick} color={PALETTE.BRAND500} />
      </S.NotHovered>

      <S.Hovered colors={hoverColors}>
        <div
          onClick={() => navi(`/detail/${idx}`, { state: { nickname, url } })}
        >
          <IconEye />
          <Text variant="base">이동</Text>
        </div>
        <div onClick={onDeleteClick}>
          <IconTrash />
          <Text variant="base">삭제</Text>
        </div>
      </S.Hovered>
    </S.WishlistItemWrapper>
  );
};

export default WishlistItem;
