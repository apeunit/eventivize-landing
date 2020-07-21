const {
  map,
  curry,
  fromPairs,
  adjust,
  toPairs,
  mergeAll,
  values,
  mapObjIndexed
} = require("ramda");
const units = function(n) {
  //return ' calc(var(--unit) * ' + n + ')'
  return (100 / 66) * n + "vw";
};

const typeScaleRatio = 1.18352102713;
//1.16496474502
const typeScale = function(n, base) {
  return Math.pow(typeScaleRatio, n) * base + "rem";
};

//8, 16, 24, 48
const dividers = [2, 3, 4, 5, 6, 10, 12, 20];

function generateDividers(dividers) {
  return dividers.reduce((acc, curr) => {
    for (let i = 1; i < curr; i++) {
      const key = `${i}/${curr}`;
      acc[key] = `${(i / curr) * 100}%`;
    }
    return acc;
  }, {});
}

function generateScale(prefix, from, to, value, rest) {
  const acc = {};
  for (let i = from; i <= to; i++) {
    const key = `${prefix}${i}`;
    acc[key] = `${value(i, rest)}`;
  }
  return acc;
}

const fontSizeBase = 20;
const leading = {
  relaxed: fontSizeBase * 1.5 * typeScaleRatio,
  normal: fontSizeBase * 1.5,
  snug: fontSizeBase * 1.25,
  tight: fontSizeBase * 1.125,
  none: fontSizeBase
};

const font = base => {
  const lineHeight = value => value / base;
  return {
    fontSizeBase: base / fontSizeBase,
    leading: map(lineHeight, leading)
  };
};

const fontFamily = value => value.fontFamily;

const fontSize = (value, key) =>
  generateScale(key + "-", -5, 15, typeScale, value.fontSizeBase);

const lineHeight = (value, key) => {
  const mapKeys = curry(obj =>
    fromPairs(map(adjust(0, d => key + "-" + d), toPairs(obj)))
  );
  return mapKeys(value.leading);
};

const typefaces = {
  sans: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'
    ],
    ...font(17.8)
  },
  serif: {
    fontFamily: ["PT Serif", "Cambria", '"Times New Roman"', "Times", "serif"],
    ...font(19.4)
  },
  display: {
    fontFamily: [
      "DM Serif Display",
      "Cambria",
      '"Times New Roman"',
      "Times",
      "serif"
    ],
    ...font(20.1)
  },
  mono: {
    fontFamily: [
      "IBM Plex Mono",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace"
    ],
    ...font(18.8)
  }
};

module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1320px"
    },
    fontFamily: map(fontFamily, typefaces),
    extend: {
      spacing: {
        ...generateScale("u", 1, 66, units),
        ...generateDividers(dividers)
      },
      fontSize: { ...mergeAll(values(mapObjIndexed(fontSize, typefaces))),
       logoFluid: "19vw" ,
       logoContained:"12.6rem" 
      },
      lineHeight: mergeAll(values(mapObjIndexed(lineHeight, typefaces))),
      maxWidth: {
        measure: "55ch",
        measureNarrow: "40ch",
        contained: "58rem"
      }
    }
  },
  variants: {
    backgroundColor: [
      "checked",
      "group-focus-within",
      "group-active",
      "group-visited",
      "group-disabled",
      "hocus",
      "group-hocus",
      "can-hover",
      "no-hover"
    ]
  },
  plugins: [require("tailwindcss-interaction-variants")]
};
