import Link from "next/link";
import VideoPopup from "./VideoPopup";
import React, { useState } from "react";

import tw, { styled, css } from "twin.macro";

const Button = styled.button(({ theme }) => [
  tw`bg-black fixed bottom-0 mx-auto block px-8 py-4 rounded-full text-white z-10 mb-5 outline-none focus:outline-none`,
  css`
    left: 37.5%;
  `,
]);

const Icon = styled.span(({ theme }) => [
  tw`inline-block align-middle mr-2 rounded-full text-black left-0`,
]);

const PlayButton = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 14.5V5.5L14 10L8 14.5Z"
        fill="white"
      />
    </svg>
  );
};

const VideoBanner = (props) => {
  const [showBanner, setShowBanner] = useState(false);

  return (
    <div>
      {showBanner && <VideoPopup onClose={() => setShowBanner(false)} />}
      {!showBanner && (
        <Button onClick={() => setShowBanner(true)}>
          <Icon>
            <PlayButton />
          </Icon>{" "}
          Let's see how it works
        </Button>
      )}
    </div>
  );
};

export default VideoBanner;
