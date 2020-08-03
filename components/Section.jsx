import tw, { styled, css } from "twin.macro";
import Grid from "./Grid";
import Note from "./Note";

const VerticalSection = (props) => {
  const colLayout = tw`lg:w-5/6 lg:ml-1/6`;
  return <Grid columns={colLayout} rowTag="ol" colTag="li" {...props} />;
};

const HorizontalSection = (props) => {
  const colLayout = tw`lg:w-1/2 mb-6`;
  return (
    <Grid columns={colLayout} {...props} />
   
  );
};

const SectionWapper = styled.section(({ theme }) => [tw`mb-u24 xl:mb-64`]);

const Section = (props) => {
  const { title, note, isVertical, isLeading, ...rest } = props;
  const ThisSection = isVertical ? VerticalSection : HorizontalSection;
  return (
    <SectionWapper className={isLeading && "is-leading"}>
      {title && (
        <h2>
          {title}
          {note && <Note isUp>{note}</Note>}
        </h2>
      )}
      <ThisSection {...rest} />
    </SectionWapper>
  );
};
export default Section;
