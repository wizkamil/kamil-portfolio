import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';



import Styled from 'styled-components';
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import { SiInstagram  } from "react-icons/si";
import { SiTwitter } from "react-icons/si";




export default function Spotlight() {
  return (
    <> 
    <Helmet>
        <title>Home</title>
    </Helmet>
    <Container >
        <SubContainer>
                <Small>Hi !</Small>
                <Hedaing>I'm Ali Akbar</Hedaing>
                <Paragraph>Full-Stack Developer</Paragraph>
                <ButtonContiner>
                    <NavLink    className={({ isActive }) => (isActive ? "active" : "")} to="Project/">
                        <Button1>Project</Button1>
                    </NavLink>
                    <NavLink    className={({ isActive }) => (isActive ? "active" : "")} to="Contact/">
                        <Button2>Contact</Button2>
                    </NavLink>
                    <NavLink    className={({ isActive }) => (isActive ? "active" : "")} to="About/">
                        <Button3 >About</Button3>
                    </NavLink>
                </ButtonContiner>
                <DigitelContainer>
                    <SubHeading>
                        Follow Me here
                    </SubHeading>
                    <DigitelItem>
                        <DigitelItems>
                            <Link1 href="https://wa.me/+919645333579">
                                <SiWhatsapp />
                            </Link1>
                        </DigitelItems>
                        <DigitelItems>
                            <Link2 href="https://instagram.com/wiz_kamil?r=nametagf"> 
                                <SiInstagram />
                            </Link2>
                        </DigitelItems>
                        <DigitelItems>
                            <Link3 href="https://www.linkedin.com/in/akbar-kamil-/">
                                <SiLinkedin />
                            </Link3>
                        </DigitelItems>
                    </DigitelItem>
                </DigitelContainer>
            </SubContainer>
      </Container>
    </>
  )
}

const Container = Styled.div`
    
`;
const SubContainer = Styled.div`
    margin-top: 12%;
    margin-left: 20%;
`;
const Small = Styled.small`
    font-size: 40px;
`;
const Hedaing= Styled.h1`
    font-size: 50px;
    font-weight: 700;
    @media all and (max-width:360px){
        font-size: 35px;
    }
`;
const Paragraph = Styled.p`
    font-size: 22px;
    line-height: 1px;
    font-weight: 200;
    margin-bottom: 50px;
    @media all and (max-width:360px){
        font-size: 19px;
    }
`;
const ButtonContiner = Styled.div`
  
`;
const Button1= Styled.button`
    padding: 15px 50px;
    border-radius: 20px;
    margin-right: 20px;
    cursor: pointer; 
    
    border: none;
    &:hover {
   background-color: #FFE338;
  }
  &.active {
   background-color: #FFE338;
  }
  @media all and (max-width:360px){
    margin-bottom: 20px;
    padding: 15px 55px;
    }
  
`;
const Button2= Styled.button`
    padding: 15px 50px;
    border-radius: 20px;
    margin-right: 20px; 
    border: none;
    cursor: pointer; 

    &:hover {
   background-color: #FFE338;
  }
  &.active {
   background-color: #FFE338;
  }
  @media all and (max-width:360px){
    margin-bottom: 20px;
    padding: 15px 55px;
    }
`;
const Button3= Styled.button`
    padding: 15px 50px;
    border-radius: 20px;
    margin-right: 20px;
    border: none;
    cursor: pointer; 
    &:hover {
        
   background-color: #FFE338;
  }
  &.active {
   background-color: #FFE338;
  }
  @media all and (max-width:360px){
    margin-bottom: 20px;
    padding: 15px 55px;
    }
`;
const DigitelContainer = Styled.div`
  
`;
const SubHeading= Styled.h5`
    margin-top: 90px;
    font-size: 18px;
`;
const DigitelItem = Styled.ul`
    display: flex;
    align-items: center;
`;
const DigitelItems = Styled.li`
    list-style: none;
    margin-right: 20px;
`;
const Link1 = Styled.a`
    color: #000;
`;
const Link2 = Styled.a`
    color: #000;
`;
const Link3 = Styled.a`
    color: #000;
`;


