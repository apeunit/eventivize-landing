import tw, { styled, css } from "twin.macro";
import { MDXProvider } from "@mdx-js/react";

const defaultCol = tw`lg:w-1/3 `;

const Grid = ({
  columns = defaultCol,
  colElements = ["li", "Col"],
  rowElements = ["ul", "ol", "Row"],
  colTag = "div",
  rowTag = "div",
  children,
}) => {
  const RowBase = styled.div(({ theme }) => [tw`flex flex-wrap -mx-u1 xl:-mx-4`]);
  const Row = RowBase.withComponent(rowTag);


  const Column = (props) => {
    const Col = styled.div(({ col = columns, theme }) => [
      tw`px-u1 xl:px-4 `,
      css`
        ${col}
      `,
    ]);
    const mdColComponents = {
      ol: (props) => <ol {...props} />,
      ul: (props) => <ul {...props} />,
      li: (props) => <li {...props} />,
    };
    const ThisCol = Col.withComponent(colTag);
    return (
      <MDXProvider components={mdColComponents}>
        <ThisCol {...props} />
      </MDXProvider>
    );
  };

  const mdComponents = {};

  colElements.forEach(
    (tag) =>
      (mdComponents[tag] = (props) => {
        return <Column {...props} />;
      })
  );
  rowElements.forEach(
    (tag) =>
      (mdComponents[tag] = (props) => {
        return <Row {...props} />;
      })
  );

  return <MDXProvider components={mdComponents}>{children}</MDXProvider>;
};

export default Grid;
