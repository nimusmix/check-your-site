import { IoEnterOutline as IconEnter } from "react-icons/io5";
import PALETTE from "../../../../constants/palette";
import Text from "../../../atoms/Text";
import * as S from "./index.styles";

export interface IUrlListItem {
  year: number;
  date: string;
  available: boolean;
  availableUrl: string;
}

const UrlListItem = ({ year, date, available, availableUrl }: IUrlListItem) => {
  if (!available) {
    return null;
  }

  return (
    <S.Wrapper onClick={() => window.open(availableUrl)}>
      <S.UpperSectionWrapper>
        <S.DateWrapper>
          <Text variant="h3" color={PALETTE.BRAND500} weight={600}>
            {year}
          </Text>
          <div className="line"></div>
          <Text variant="base" color={PALETTE.WHITE300}>
            {date}
          </Text>
        </S.DateWrapper>

        <IconEnter size={20} color={PALETTE.BRAND500} />
      </S.UpperSectionWrapper>

      <Text variant="base" color={PALETTE.BLACK300}>
        {availableUrl}
      </Text>
    </S.Wrapper>
  );
};

export default UrlListItem;
