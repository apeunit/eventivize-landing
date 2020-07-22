

import tw, { styled, css } from "twin.macro";
const Container = styled.div(({ isSmall, theme }) => [
  tw`xl:max-w-contained mx-auto`,
  css`
    background: #ffffff;
  `
]);

export default Container;


