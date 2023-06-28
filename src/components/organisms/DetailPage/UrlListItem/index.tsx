import Text from "../../../atoms/Text";
import * as S from "./index.styles";

export interface IUrlListItem {
  year: number;
  date: string;
  available: boolean;
  availableUrl: string;
}

const UrlListItem = ({ year, date, available, availableUrl }: IUrlListItem) => {
  return (
    <S.Wrapper>
      <Text variant="lg">{year}</Text>
    </S.Wrapper>
  );
};

export default UrlListItem;
