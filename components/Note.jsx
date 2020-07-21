import tw, { styled, css } from "twin.macro";
import { MDXProvider } from "@mdx-js/react";
import Grid from "./Grid";

//columns={ tw`lg:w-2/3 lg:ml-1/3`} {...props}

const mdComponents = {};



const Note = ({ children, isUp, theme }) => {


  const NoteAnchor = styled.span(({ theme }) => [
    tw`inline-block relative `,
    css` margin-bottom:  ${isUp ?  "0.6em" : "1rem"}`//-0.2rem
    
  ]);
  /*
  const NoteText = styled.span(({ theme }) => [
    tw`absolute inline-block w-screen max-w-measureNarrow ml-4 `,
    css`
      
      transform: translateY(-100%);
      ::before{
        content:"→";
        ${tw` absolute -ml-4`}
      }
    `,
  ]);*/

  const NoteTextUp = styled.span(({ theme }) => [
    tw`absolute inline-block w-screen max-w-measureNarrow  text-center `,
    css`
      margin-top:-1em;
    
      transform: translateY(-200%) translateX(-57%);;
      ::after{
        content:"↑";
        ${tw` absolute block text-center w-full mt-1`}
      }
    `,
  ]);

  const NoteTextDown = styled.span(({ theme }) => [
    tw`absolute inline-block w-screen max-w-measureNarrow  text-center `,
    css`
      margin-top:-1em;
    
      transform: translateY(100%) translateX(-60%);;
      ::before{
        content:"↓";
        ${tw` block text-center w-full mb-1 -mt-1`}
      }
    `,
  ]);

  const ThisNote = isUp ? NoteTextUp : NoteTextDown;
  return (
    <NoteAnchor className="annotation">
      <ThisNote>{children}</ThisNote>
    </NoteAnchor>
  );
};

export default Note;
