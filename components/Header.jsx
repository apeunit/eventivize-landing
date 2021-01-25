import Link from "next/link";
import Wrapper from "./Wrapper";

import tw, { styled, css } from "twin.macro";

import Container from "./Container";



const HeaderWrapper = Wrapper.withComponent("header");


const Header = props => {

  const Logo = styled.nav(({ theme }) => [
    tw` w-10 h-10 border-current border-4 rounded-full`,
  ]);
  const Navbar = styled.nav(({ theme }) => [
    tw`flex justify-between items-center py-4 border-current border-b`,
    css` 
     li{
      ${tw`  inline-block ml-4`}
     }
    `
  ]);
  return (
    <HeaderWrapper>
      <Container>
        <Navbar>
          <Logo />
          <ul>
            <li>
              <a href="./">About</a>
            </li>
            <li><a href="https://blog.apeunit.com/tag/eventivize/">Blog</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfIgzj57sQgA2RGiWqnL2l-yNyfQOZb8GJVXCpBTqXhBwFyOQ/viewform">Join us</a></li>

          </ul>
        </Navbar>


      </Container>
    </HeaderWrapper>);
};

export default Header;
