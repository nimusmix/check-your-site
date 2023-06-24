import { useSetRecoilState } from "recoil";
import toastState from "../../recoil/toastState";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import { PALETTE } from "../../constants/palette";
import * as S from "./index.styles";

const MainPage = () => {
  const setToast = useSetRecoilState(toastState);

  const showToast = () => {
    setToast({ msg: "토스트 테스트", isVisible: true });
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Text variant="h1">Site Tracker</Text>
        <Text variant="base">내가 관심 있는 사이트의 역사가 궁금하다면?</Text>
      </S.TitleWrapper>

      <Button buttonType="fill" color={PALETTE.BRAND500} onClick={showToast}>
        추가
      </Button>
      <Button buttonType="empty" color={PALETTE.BRAND500}>
        추가
      </Button>
      <input />
    </S.Wrapper>
  );
};

export default MainPage;
