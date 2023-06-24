import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import toastState from '../../../recoil/toastState';
import * as S from './index.styles';

const Toast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  useEffect(() => {
    if (toast.isVisible) {
      setTimeout(() => {
        setToast({ msg: '', isVisible: false });
      }, 3000);
    }
  });

  return <S.Wrapper>${toast.msg}</S.Wrapper>;
};

export default Toast;
