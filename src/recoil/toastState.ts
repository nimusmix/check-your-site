import { atom } from 'recoil';

interface IToast {
  msg: string;
  isVisible: boolean;
}

const toastState = atom<IToast>({
  key: 'toastState',
  default: {
    msg: '',
    isVisible: false,
  },
});

export default toastState;
