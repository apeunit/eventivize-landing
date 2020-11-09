import tw, { styled, css } from "twin.macro";

const Wrapper = styled.div(({ theme }) => [
  tw`px-u4 pb-16 overflow-x-hidden`,
  css`
    background: #ffffff;
  `
]);

export default Wrapper;
