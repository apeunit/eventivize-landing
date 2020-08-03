import tw, { styled, css } from "twin.macro";

const HandLeft = ({ theme }) => {
  const AbsluteWrapper = styled.div(({ theme }) => [tw`absolute w-full`]);
  const SvgWrapper = styled.div(({ theme }) => [
    tw`absolute w-200  lg:w-full right-0 -mr-144 md:-mr-9/15 -mt-100 pointer-events-none`,
  ]);
  return (
    <AbsluteWrapper>
      <SvgWrapper>
        <svg
          width="100%"
          viewBox="0 0 1173 714"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M223.904 522C308.22 437.712 446.679 476.301 508 415C569.321 353.699 563.5 279 621.5 221C732.04 110.46 871.5 319.5 979.5 211.5C1031.5 159.5 1032 18 1173 18"
            stroke="black"
            strokeWidth="35"
          />
          <g clipPath="url(#clip0)">
            <g clipPath="url(#clip1)">
              <path
                d="M231.317 546.126C239.87 547.261 242.135 540.712 242.557 533.044C243.154 522.197 231.282 501.255 223.443 495.752C216.249 490.701 208.771 490.352 204.902 495.979"
                fill="white"
              />
              <path
                d="M231.317 546.126C239.87 547.261 242.135 540.712 242.557 533.044C243.154 522.197 231.282 501.255 223.443 495.752C216.249 490.701 208.771 490.352 204.902 495.979"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M141.064 463.827C150.044 452.473 166.017 475.026 170.05 481.739C174.896 489.803 203.81 492.135 214.729 505.013C222.129 513.741 233.241 535.489 230.928 545.957C226.966 563.882 217.176 576.385 202.703 586.473C197.572 590.049 191.45 593.692 185.899 595.155C162.279 601.381 156.568 588.402 153.562 583.715C142.638 584.945 130.832 577.016 127.239 560.983C115.371 566.088 108.25 569.665 97.4955 575.583C79.5055 585.481 70.5818 550.47 100.906 537.871C116.13 531.547 144.387 526.91 160.447 509.457C138.316 498.615 124.786 484.41 141.064 463.827Z"
                fill="white"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M125.536 559.053C136.828 554.107 146.172 551.541 157.767 554.344C149.313 554.77 134.496 560.179 125.492 564.409L125.536 559.053Z"
                fill="black"
              />
              <path
                d="M152.272 586.302L152.051 581.379C159.124 580.798 167.049 580.096 172.215 581.851C168.823 581.925 158.029 585.378 152.272 586.302Z"
                fill="black"
              />
              <path
                d="M220.797 542.752C213.028 552.691 210.07 554.267 205.608 558.455"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M215.998 532.476C204.963 541.006 198.852 544.064 190.984 549.075"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M209.945 520.364C201.634 525.161 197.267 526.648 191.678 529.162"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M233.746 512.917C243.458 509.647 251.381 502.232 259.416 496.114C266.253 490.908 273.341 486.012 279.859 480.403C287.048 474.216 294.218 468.048 301.79 462.324C309.127 456.778 318.719 451.902 324.693 444.713C331.237 436.838 323.648 420.661 322.553 412.1C321.41 403.163 321.842 394.352 321.224 385.433C320.756 378.666 328.172 369.584 331.282 364.756C341.508 348.883 352.546 330.638 367.671 318.853C382.019 307.673 399.86 300.215 416.387 292.961C434.937 284.82 454.056 279.185 473.857 274.932C500.048 269.305 523.329 265.174 546.897 251.449C577.62 233.556 614.473 205.657 626.109 169.943C633.242 148.046 646.12 127.998 657.66 108.093"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="304.449"
                height="359.249"
                fill="white"
                transform="translate(122.978 713.338) rotate(-113.825)"
              />
            </clipPath>
            <clipPath id="clip1">
              <rect
                width="147"
                height="172"
                fill="white"
                transform="translate(106.36 635.197) rotate(-113.825)"
              />
            </clipPath>
          </defs>
        </svg>
      </SvgWrapper>
    </AbsluteWrapper>
  );
};

export default HandLeft;
