import { FieldValues, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { BsPencil as IconPencil, BsSearch as IconSearch } from "react-icons/bs";
import PALETTE from "../../../../constants/palette";
import useToast from "../../../../hooks/useToast";
import wishlistState from "../../../../recoil/wishlistState";
import urlParsing from "../../../../utils/urlParsing";
import Button from "../../../atoms/Button";
import { IWishlistItem } from "../WishlistItem";
import * as S from "./index.styles";
import { MESSAGE_SEARCH_ERROR } from "../../../../constants/message";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [wishlist, setWishlist] = useRecoilState(wishlistState);
  const { showToast } = useToast();

  const onValid = ({ nickname, url }: FieldValues) => {
    if (wishlist?.length === 4) {
      showToast(MESSAGE_SEARCH_ERROR.WISHLIST_LENGTH);
      return;
    }

    const data: IWishlistItem = {
      nickname,
      url: urlParsing(url),
    };

    const newWishlist = [...wishlist, data];
    setWishlist(newWishlist);
    reset();
  };

  const onInvalid = (data: FieldValues) => {
    if (errors.nickname === undefined && errors.url === undefined) {
      showToast(MESSAGE_SEARCH_ERROR.NICKNAME_REQUIRED);
    } else if (errors.nickname) {
      showToast(errors.nickname.message as string);
    } else if (errors.url) {
      showToast(errors.url.message as string);
    }
  };

  return (
    <S.SearchForm onSubmit={handleSubmit(onValid, onInvalid)}>
      <S.InputWrapper className="nickname">
        <div className="icon">
          <IconPencil size={14} color={PALETTE.BLACK300} />
        </div>
        <input
          placeholder="별명을 입력하세요. (최대 5자)"
          {...register("nickname", {
            required: MESSAGE_SEARCH_ERROR.NICKNAME_REQUIRED,
            maxLength: {
              value: 5,
              message: MESSAGE_SEARCH_ERROR.NICKNAME_LENGTH,
            },
          })}
        />
      </S.InputWrapper>

      <div className="line"></div>

      <S.InputWrapper className="url">
        <div className="icon">
          <IconSearch size={14} color={PALETTE.BLACK300} />
        </div>
        <input
          placeholder="URL을 입력하세요."
          {...register("url", { required: MESSAGE_SEARCH_ERROR.URL_REQUIRED })}
        />
      </S.InputWrapper>
      <Button type="submit" designType="fill" color={PALETTE.BRAND500}>
        추가
      </Button>
    </S.SearchForm>
  );
};

export default SearchBar;
