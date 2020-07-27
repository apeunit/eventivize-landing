import tw from "twin.macro";

const textStyles = {
  serifBase: tw`       font-serif      text-serif-0      leading-serif-normal`,
  sansBase: tw`        font-sans       text-sans-0       leading-sans-normal `,
  displayBase: tw`     font-display    text-display-0    leading-display-normal `,
  monoBase: tw`        font-mono       text-mono-0       leading-mono-normal `,
  serifSm: tw`         font-serif      text-serif--1     leading-serif-normal`,
  sansSm: tw`          font-sans       text-sans--1      leading-sans-normal `,
  displaySm: tw`       font-display    text-display--1   leading-display-normal `,
  monoSm: tw`          font-mono       text-mono--1      leading-mono-normal `,
  serifSmRelaxed: tw`  font-serif      text-serif--1     leading-serif-relaxed`,
  sansSmRelaxed: tw`   font-sans       text-sans--1      leading-sans-relaxed `,
  displaySmRelaxed: tw`font-display    text-display--1   leading-display-relaxed `,
  monoSmRelaxed: tw`   font-mono       text-mono--1      leading-mono-relaxed `,
  serifUppcBase: tw`   font-serif      text-serif--2     leading-serif-normal      tracking-widest   uppercase   font-bold`,
  sansUppcBase: tw`    font-sans       text-sans--2      leading-sans-normal       tracking-widest   uppercase   font-semibold`,
  displayUppcBase: tw` font-display    text-display--2   leading-display-normal    tracking-widest   uppercase`,
  monoUppcBase: tw`    font-mono       text-mono--2      leading-mono-normal       tracking-widest   uppercase`,
  serifXs: tw`         font-serif      text-serif--2     leading-serif-normal`,
  sansXs: tw`          font-sans       text-sans--2      leading-sans-normal `,
  displayXs: tw`       font-display    text-display--2   leading-display-normal `,
  monoXs: tw`          font-mono       text-mono--2      leading-mono-normal `,
  sansH1: tw`          font-sans       text-sans-5       leading-sans-none              tracking-tight  font-extrabold
                                      sm:text-sans-8   `,
  displayH2: tw`      font-display    text-display-3    leading-display-tight     font-normal`,
  sansDisplay3: tw`   font-mono    text-sans-1  leading-sans-snug font-bold`,
  sansDisplay4: tw`   font-mono    text-2xl tracking-tight leading-none font-bold`,
  sansDisplay5: tw`   font-mono    text-xl tracking-tight leading-none font-bold`,
  sansDisplay6: tw`   font-mono    text-lg tracking-tight leading-none font-bold`
};

const greenTheme = {
  colors: {
    text: "teal",
    background: "yellow",
    primary: "green",
    accent: "indigo",
    highlight: "yellow",
    muted: "gray",
    secondary: []
  },
};
/*
const myTheme = {
  colors: {
    text: "teal",
    background: "yellow",
    primary: "green",
    accent: "indigo",
    highlight: "yellow",
    muted: "gray"
  },
  colorMode:{
    text: 900,
    background: 100,
    primary: 600,
    accent: 600,
    highlight: 400,
    muted: 200
  }
};

const myTheme = {
  colors: {
    base: "teal",
    primary: "green",
    accent: "indigo",
  },
  colorMode:{
    text: 900,
    background: 100,
    primary: 600,
    accent: 600,
    highlight: 400,
    muted: 200
  }
};

*/



const classicTheme = {
  typography: {
    logo: "teal",
    tagLine: "yellow",

    leadText: "green",

    featuredHeadline: "indigo",
    featuredText: "yellow",

    sectionHeadline: "gray",

    baseText: "",
    baseHeadline: "",

    annotation: "",
    nav: "",
    meta: ""
  }
};

const classicBase = {
  typography: {
    text: "",
    headline: ""
  }
};

const classicMd = {
  typography: {
    text: "",
    headline: ""
  }
};

const classicSm = {
  typography: {
    text: "",
    headline: ""
  }
};

const classicSm = {
  typography: {
    text: "",
    headline: ""
  }
};
