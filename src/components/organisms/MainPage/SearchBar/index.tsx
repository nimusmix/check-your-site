import { FieldValues, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import PALETTE from "../../../../constants/palette";
import useToast from "../../../../hooks/useToast";
import wishlistState from "../../../../recoil/wishlistState";
import urlParsing from "../../../../utils/urlParsing";
import Button from "../../../atoms/Button";
import { IWishlistItem } from "../WishlistItem";
import * as S from "./index.styles";

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
      showToast("최대 4개까지만 담을 수 있습니다.");
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
    if (errors?.nickname) {
      showToast(errors.nickname.message as string);
    } else if (errors?.url) {
      showToast(errors.url.message as string);
    }
  };

  return (
    <S.SearchForm onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        placeholder="별명을 입력하세요."
        {...register("nickname", {
          required: "별명은 필수 항목입니다.",
          maxLength: {
            value: 5,
            message: "별명은 5글자까지 입력할 수 있습니다.",
          },
        })}
      />
      <input
        placeholder="url을 입력하세요."
        {...register("url", { required: "URL은 필수 항목입니다." })}
      />
      <Button type="submit" designType="fill" color={PALETTE.BRAND500}>
        추가
      </Button>
    </S.SearchForm>
  );
};

export default SearchBar;
