import styled from "styled-components";
import { WishlistItemWrapper } from "../WishlistItem/index.styles";

export const WishlistNoItemWrapper = styled(WishlistItemWrapper)<{ color: string }>`
  justify-content: center;
  box-shadow: none;
  border: ${({ color }) => `1px dashed ${color}`};
  text-align: center;
  line-height: 1.2;
  `;


