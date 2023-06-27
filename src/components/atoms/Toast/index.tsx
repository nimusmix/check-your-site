import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { PiWarningCircleBold as IconWarning } from "react-icons/pi";
import toastState from "../../../recoil/toastState";
import Text from "../Text";
import * as S from "./index.styles";

const Toast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  useEffect(() => {
    if (toast.isVisible) {
      setTimeout(() => {
        setToast({ msg: "", isVisible: false });
      }, 3000);
    }
  });

  return (
    <S.Toast>
      <IconWarning />
      <Text variant="base">{toast.msg}</Text>
    </S.Toast>
  );
};

export default Toast;
