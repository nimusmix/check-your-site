import { useSetRecoilState } from "recoil";
import toastState from "../recoil/toastState";

const useToast = () => {
  const setToast = useSetRecoilState(toastState);
  const showToast = (msg: string) => {
    setToast({ msg, isVisible: true });
  };

  return { showToast };
};

export default useToast;
