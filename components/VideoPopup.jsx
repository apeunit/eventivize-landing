import tw, { styled, css } from "twin.macro";

const Modal = styled.div(({ theme }) => [
  tw`fixed top-0 h-full w-full z-10 left-0 flex items-center justify-center`,
]);

const Overlay = styled.div(({ theme }) => [
  tw`absolute w-full top-0 h-screen bg-black z-0 opacity-75`,
]);
// const VideoContainer = styled.div(({ theme }) => [tw`w-3/4 bg-white py-12 text-center`]);

const CloseButton = styled.button(({ theme }) => [
  tw`w-12 h-12 bg-purple-600 absolute bottom-0 mb-5 rounded-full outline-none focus:outline-none text-center`,
]);

const Video = styled.iframe(({ theme }) => [tw`relative z-10 bg-white`]);

const CloseIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      css={[tw`inline-block`]}
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="4"
        y="5"
        width="15"
        height="14"
      >
        <path
          d="M18.9068 6.41L17.5037 5L11.9411 10.59L6.37855 5L4.97546 6.41L10.538 12L4.97546 17.59L6.37855 19L11.9411 13.41L17.5037 19L18.9068 17.59L13.3442 12L18.9068 6.41Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect width="23.8823" height="24" fill="white" />
      </g>
    </svg>
  );
};

const VideoBanner = ({ onClose }) => {
  return (
    <Modal>
      <Overlay />
      <Video
        src="https://player.vimeo.com/video/479588271"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
      {/* </VideoContainer> */}
      <CloseButton onClick={() => onClose()}>
        <CloseIcon />
      </CloseButton>
    </Modal>
  );
};

export default VideoBanner;
