import tw, { styled, css } from "twin.macro";

import Wrapper from "./Wrapper";
import Container from "./Container";

const FooterWrapper = Wrapper.withComponent("footer");

const Footer = (props) => {
  const Contacts = styled.div(({ theme }) => [tw`mb-u4 lg:mb-16`]);
  return (
    <FooterWrapper>
      <Container>
        <Contacts>
          <ul>
            <li>
              <a href="mailto:even@apeunit.com">even@apeunit.com</a>
            </li>
            <li>
              <br />
              <a href="mailto:even@apeunit.com">Join us </a>
            </li>
            <li>
              <a href="./Impressum">Imprint </a>
            </li>
          </ul>
        </Contacts>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
