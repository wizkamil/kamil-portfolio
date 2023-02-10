import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

export default function Header() {
  const [isClick , setIsClick] =useState(false);
const [active , setActive]=useState("")

const handleClick = () => {
setIsClick(!isClick);
setActive (isClick ? 'active' : '')
}
  return (
<>
    <Container>
      <SubContainer>
          <ItemContiner>
            <Link  to="/kamil-portfolio">
              <Items>Home</Items>
            </Link>
            <Link to="/kamil-portfolio/About">
              <Items>About</Items>
            </Link>
            <Link to="/kamil-portfolio/Contact">
              <Items>Contact</Items>
            </Link>
            <Link to="/kamil-portfolio/Project">
              <Items>Project</Items>
            </Link>
          </ItemContiner>

    {/* ---------- hamburger menu ----------------------- */}
    
     <button id="menu-icon" className={active} onClick={handleClick} >
          <img src={require("../images/hamberg.png")} alt='Hamburger' />
      </button>
          <div id="mobile-menu" className={active}>
          <ul>
          <Link to="/kamil-portfolio">
            <li>Home</li>
            </Link>
            <Link to="/kamil-portfolio/About">
            <li>About</li>
            </Link>
            <Link to="/kamil-portfolio/Contact">
            <li>Contact</li>
            </Link>
            <Link to="/kamil-portfolio/Project">
            <li>Project</li>
            </Link>
          </ul>
          </div>
          <span className={'close '+ active} onClick={handleClick} ><img src={require("../images/close.png")} alt="" /></span>
          <span className={'overlay '+ active} onClick={handleClick}></span>

    {/* ---------- hamburger menu ----------------------- */}
      </SubContainer>
    </Container>
  </>
  )
};

const Container = Styled.div`
`;
const SubContainer = Styled.div`
`;
const ItemContiner= Styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;

    @media all and (max-width:360px){
      display: none;
    }
`;
const Items= Styled.li`
    margin-right: 50px;
    color: #000;
`;

    


