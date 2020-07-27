import tw, { styled, css } from "twin.macro";


const mdComponents = {};



const Note = ({ children, isUp, theme }) => {


  const NoteAnchor = styled.span(({ theme }) => [
    tw`inline-block relative `,
    css` margin-bottom:  ${isUp ?  "0.6em" : "1rem"}`
    
  ]);

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
