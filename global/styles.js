import { css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
/*
const baseFontSize = {
  minSize: 16,
  maxSize: 18,
  minViewport: 320,
  maxViewport: 640
};*/

const baseFontSize = {
  minSize: 16,
  maxSize: 20,
  minViewport: 320,
  maxViewport: 1320
};
const OffsetSize = baseFontSize.maxSize - baseFontSize.minSize;
const OffsetViewport = baseFontSize.maxViewport - baseFontSize.minViewport;
const styles = css`
  ${emotionNormalize}
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:ital@0;1&family=Inter:wght@400;500;600;800&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap");
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  button {
    background-color: transparent;
    background-image: none;
    padding: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji"; /* 1 */
    line-height: 1.5;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
  }

  hr {
    border-top-width: 1px;
  }

  img {
    border-style: solid;
  }

  textarea {
    resize: vertical;
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #a0aec0;
  }

  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    color: #a0aec0;
  }

  input::placeholder,
  textarea::placeholder {
    color: #a0aec0;
  }

  button,
  [role="button"] {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      monospace;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  /*! normalize-opentype.css v0.2.4 | MIT License | kennethormandy.com/journal/normalize-opentype-css */
  /**
 * 1. Inherit style issues with custom selections, per robsterlini.co.uk/journal/opentype-and-selection-dont-mix
 * 2. Turn on kerning, standard ligatures, and proportional, oldstyle numerals
 *    Turn off all other ligatures, tabular, lining numerals, and alternates
      Uses same settings for tables
 * 3. Hard-codes fallback text selection for issue #18, color is Chrome’s per via http://stackoverflow.com/a/16094931/864799
 */
  ::-moz-selection {
    color: inherit;
    /* 1. */
    text-shadow: inherit;
    /* 2. */
    background-color: #accef7;
    /* 3. */
  }
  ::selection {
    color: inherit;
    /* 1. */
    text-shadow: inherit;
    /* 2. */
    background-color: #accef7;
    /* 3. */
  }

  html,
  body,
  table {
    -webkit-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1,
      "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0;
    -moz-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0, "dlig" 0;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0, "dlig" 0;
    /* 2. */
  }

  /* Headings
========================================================================== */
  /**
 * 1. Turn on discretionary ligatures for larger headings
 */
  h1,
  h2,
  h3 {
    -webkit-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1,
      "tnum" 0, "onum" 1, "lnum" 0, "dlig" 1;
    -moz-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0, "dlig" 1;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0, "dlig" 1;
    /* 1. */
  }

  /* Text-level semantics
========================================================================== */
  /**
 * 1. Change all letters to uppercase
 * 2. Turn on small caps for upper and lowercase letters
 */
  abbr {
    text-transform: uppercase;
    /* 1 */
    -webkit-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1,
      "tnum" 0, "onum" 1, "lnum" 0, "smcp" 1, "c2sc" 1;
    -moz-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0, "smcp" 1, "c2sc" 1;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0, "smcp" 1, "c2sc" 1;
    /* 2 */
  }

  /*
 * TODO: Turn on diagonal fractions where appropriate
 */
  time {
    -webkit-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1,
      "tnum" 0, "onum" 1, "lnum" 0;
    -moz-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0;
  }

  /*
 * 1. Turn off kerning and ligatures,
 *    Turn on lining, tabular numerals, slashed zero
 */
  pre,
  kbd,
  samp,
  code {
    -webkit-font-feature-settings: "kern" 0, "liga" 0, "calt" 1, "dlig" 0,
      "pnum" 0, "tnum" 1, "onum" 0, "lnum" 1, "zero" 1;
    -moz-font-feature-settings: "kern" 0, "liga" 0, "calt" 1, "dlig" 0, "pnum" 0,
      "tnum" 1, "onum" 0, "lnum" 1, "zero" 1;
    font-feature-settings: "kern" 0, "liga" 0, "calt" 1, "dlig" 0, "pnum" 0,
      "tnum" 1, "onum" 0, "lnum" 1, "zero" 1;
    /* 1. */
  }

  /**
 * 1. Turn on proper supercript numerals
 */
  sup {
    -webkit-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1,
      "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0, "sups" 1;
    -moz-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0, "dlig" 0, "sups" 1;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0, "dlig" 0, "sups" 1;
    /* 1. */
  }

  /**
 * 1. Turn on proper subscript numerals
 */
  sub {
    -webkit-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1,
      "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0, "subs" 1;
    -moz-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0, "dlig" 0, "subs" 1;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 1, "lnum" 0, "dlig" 0, "subs" 1;
    /* 1. */
  }

  /* Grouping content
========================================================================== */
  /**
 * TODO: Adds proper bullets
 */
  /*
 * TODO:
 * 1. Adds counters for lists
 * 2. Use proper numerals for lists
 */
  /**
 * Adds proper small caps
 */
  /**
 * TODO: scmp, sc2c, pnum, case sensitive forms for postal codes
 */
  /* Forms
========================================================================== */
  /**
 * 1. Turns on lining, proportional numerals without clarified zeroes
 * TODO: Additional input modes https://developer.mozilla.org/en/docs/Web/HTML/Element/Input#attr-inputmode
 */
  input[type="color"],
  input[type="date"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="number"],
  input[type="range"],
  input[type="tel"],
  input[type="week"] {
    -webkit-font-feature-settings: "kern" 0, "liga" 1, "calt" 1, "pnum" 1,
      "tnum" 0, "onum" 0, "lnum" 1, "zero" 0;
    -moz-font-feature-settings: "kern" 0, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 0, "lnum" 1, "zero" 0;
    font-feature-settings: "kern" 0, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0,
      "onum" 0, "lnum" 1, "zero" 0;
    /* 1. */
  }

  /* Localisation
========================================================================== */
  /* Tables
========================================================================== */
  /**
 * 1. Turns on tabular, lining numerals and slashed zero
 */
  tbody,
  caption {
    -webkit-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 0,
      "tnum" 1, "onum" 0, "lnum" 1, "zero" 1;
    -moz-font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 0, "tnum" 1,
      "onum" 0, "lnum" 1, "zero" 1;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 0, "tnum" 1,
      "onum" 0, "lnum" 1, "zero" 1;
    /* 1. */
  }

  html {
    font-size: calc(
      ${baseFontSize.minSize}px + ${OffsetSize} *
        ((100vw - ${baseFontSize.minViewport}px) / ${OffsetViewport})
    );
  }
`;
export default styles;
