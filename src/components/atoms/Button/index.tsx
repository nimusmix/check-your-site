import * as S from "./index.styles";

export interface IButtonProps extends S.IButton {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: IButtonProps) => {
  const { children, onClick } = props;

  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
