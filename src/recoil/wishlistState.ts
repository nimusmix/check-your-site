import { atom } from 'recoil';
import { IWishlistItem } from './../components/organisms/MainPage/WishlistItem/index';

const wishlistState = atom<Array<IWishlistItem>>({
  key: 'wishlistState',
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const wishlistStr = localStorage.getItem('wishlist');
      setSelf(JSON.parse(wishlistStr!) || []);

      onSet((newWishlist: Array<IWishlistItem>) => {
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
      });
    }
  ]
});

export default wishlistState;
