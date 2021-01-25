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
              <a href="mailto:eventivize@apeunit.com">eventivize@apeunit.com</a>
            </li>
            <li>+49 30 306 490 10</li>
            <li><br/>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIgzj57sQgA2RGiWqnL2l-yNyfQOZb8GJVXCpBTqXhBwFyOQ/viewform">Join us </a>
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
