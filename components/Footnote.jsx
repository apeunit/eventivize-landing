import tw, { styled, css } from "twin.macro";

const Footnote = ({ children, index = "*", theme }) => {
  const ThisNote = styled.p(({ theme }) => [
    tw`max-w-measureNarrow pl-4 relative`,
    css`    
      ::before{
        content:"${index}";
        ${tw`left-0 absolute`}
      }
    `,
  ]);

  return <ThisNote className="footnote">{children}</ThisNote>;
};

export default Footnote;
