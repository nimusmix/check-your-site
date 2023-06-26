import PALETTE from "../../../../constants/palette";
import Text from "../../../atoms/Text";
import * as S from "./index.styles";

const WishlistNoItem = () => {
  return (
    <S.WishlistNoItemWrapper color={PALETTE.BRAND500}>
      <Text variant="sm" color={PALETTE.BRAND500}>
        관심 있는 사이트를 등록해 보세요.
      </Text>
    </S.WishlistNoItemWrapper>
  );
};

export default WishlistNoItem;
