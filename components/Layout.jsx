import Head from "next/head";
import React from "react";
import { Global } from "@emotion/core";
import { MDXProvider } from "@mdx-js/react";
import styles from "./../global/styles";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Wrapper from "./../components/Wrapper";
import Container from "./../components/Container";
import Note from "./Note";
import Section from "./../components/Section";
import tw, { styled, css } from "twin.macro";

const Main = Wrapper.withComponent("main");



const textSyles = {
  headlineHuge: tw`   font-sans    text-logoFluid   leading-display-none   font-bold   tracking-tighter
                                      xl:text-logoContained`,
  headlineXxl: tw`    font-sans       text-sans-7      leading-sans-none      font-medium   tracking-tighter 
                                      md:text-sans-12`,
  headlineXl: tw`     font-sans       text-sans-1      leading-sans-none      font-bold md:font-medium   tracking-tight 
                                      md:text-sans-7`,
  headline: tw`       font-sans       text-sans-1      leading-sans-none      font-bold   tracking-tight
                                      md:text-sans-3`,
  leadText: tw`       font-sans       text-sans-1      leading-sans-tight     font-medium   tracking-tight
                                      md:text-sans-3    `,
  text:     tw`       font-sans       text-sans-0      leading-sans-snug      font-medium `,
  annotation: tw`     font-mono       text-mono--2     leading-mono-tight     font-normal italic tracking-normal`,
  nav: tw`  `,
  meta: tw`  `,
};

const Brand = styled.div(({ theme }) => [
  tw`flex flex-col justify-end mb-16`,
  css` height:60vh;`
  
]);

const Typography = styled.div(({ theme }) => [

  css`
    ${textSyles.text}
    ${tw` text-purple-600`}
    *.is-leading{${textSyles.leadText}}
    h1 {${textSyles.headlineHuge} ${tw` mt-10`}}
    h2 {${textSyles.headlineXxl} ${tw` mb-10`}}
    h3 {${textSyles.headlineXl} ${tw` mb-5`}}
    h4 {${textSyles.headline}}
    .annotation *{${textSyles.annotation}}
    p, h4, ol { ${tw` mb-3 `}}
    p { ${tw` mb-3 max-w-measure`}}
    ol {
      counter-reset: ol-counter;
    }
    ol li {
      counter-increment: ol-counter;
    
      ${tw` relative`}
      ::before{
        content: counter(ol-counter);
        ${tw` float-left w-u10 xl:w-40 h-full mt-1`}
        ${textSyles.text}
      }
      ::after{
        content:'';
        ${tw`  h-1 border-t border-current block absolute`}
        top: 0.55em;
        left: 1.25em;
        right: calc( 75% + 1.25em );
      }
    }
  `,
]);

const mdComponents = {
  Brand: (props) => <Brand {...props} />,
  Section: (props) => <Section {...props} />,
  Note: (props) => <Note {...props} />
};
//li: props => <Li {...props} />
export default function Layout({
  children,
  title = "Eventivize",
}) {
  return (
    <React.Fragment>
      <Global styles={styles} />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MDXProvider components={mdComponents}>
      <Typography>
        <Header />
        <Main>
          
          <Container>{children}</Container>
          
       
        
         
        </Main>
        <Footer/>
        </Typography>
      </MDXProvider>
    </React.Fragment>
  );
}
