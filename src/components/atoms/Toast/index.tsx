import { useEffect } from "react";
import { useRecoilState } from "recoil";
import toastState from "../../../recoil/toastState";
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

  return <S.Toast>{toast.msg}</S.Toast>;
};

export default Toast;
