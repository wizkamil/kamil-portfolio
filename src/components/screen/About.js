import React from 'react'
import Styled from 'styled-components';
import Header from '../Includes/Header';
import { Helmet } from 'react-helmet';


import Html from '../images/html5.svg'
import Js from '../images/square-js.svg'
import Rt from '../images/react.svg'
import Python from '../images/python.svg'
import Dp from "../images/dp.jpg"

export default function About() {
  return (
    <>
    <Helmet>
        <title>About</title>
    </Helmet>
    <Header />
      <Container>
        <SubCotiner>
            <LeftContainer>
                <ImageContainer>
                    <DpImg src={Dp} />
                </ImageContainer>
                <LogoImage>
                    <ImageContiner>
                            <ImageItems>
                                <LogoImg src={Html} alt="html"  />
                            </ImageItems>
                            <ImageItems>    
                                <LogoImg src={Js} alt="js" />
                            </ImageItems>
                            <ImageItems>     
                                <LogoImg src={Rt} alt="React" />
                            </ImageItems>
                            <ImageItems> 
                                <LogoImg src={Python} alt="html" />
                            </ImageItems>
                        </ImageContiner> 
                </LogoImage>
            </LeftContainer>
            <RightContainer>
                <Heading>Ali Akbar</Heading>
                <SubHeading> Full-Stack Developer</SubHeading>
                <Paragraph>" If you already have a job make sure you make it worth counting. You excel at that because of some factors you have to provide it or something equivalent. Which will be experience or degree if you have great experience and great skills recruiting managers won't mind giving you a fair chance or it might be troublesome. You should keep polishing your skills "</Paragraph>
                <Button href={require("../images/cv.pdf")} download="kamil.pdf">Resume</Button>
            </RightContainer> 
        </SubCotiner>
      </Container>
    </>
  )
}

const Container= Styled.div`
    margin-top: 8%;
    margin-left: 20%;
`;
const SubCotiner= Styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width:360px){
        flex-direction: column;
    }
`;
const LeftContainer = Styled.div`

`;
const ImageContainer= Styled.div`
    width: 30%;
    @media all and (max-width:980px){
        width: 38%;
    }
    @media all and (max-width:680px){
        width: 40%;
    }
    @media all and (max-width:540px){
        width: 45%;
    }
    @media all and (max-width:360px){
        width: 50%;
    }
`;
const DpImg  = Styled.img`
    display: block;
    width: 100%;
`;
const SideHedaing = Styled.p`
    margin-top: 12em;
`;
const RightContainer = Styled.div`
    margin-right: 25%;

`;
const Heading = Styled.h1`
    font-size: 50px;
    @media all and (max-width:980px){
        font-size:40px
    }
    @media all and (max-width:768px){
        font-size:30px
    }
    @media all and (max-width:680px){
        font-size:25px
    }
    @media all and (max-width:680px){
        font-size:30px
    }

`;
const LogoImage = Styled.div`
    padding-top: 14em;
    @media all and (max-width:980px){
        padding-top: 11em;
        
    }
    @media all and (max-width:768px){
        padding-top: 8em;
        
    }
    @media all and (max-width:680px){
        padding-top: 8.5em;
        
    }
    @media all and (max-width:540px){
        padding-top: 11em;
        
    }
    @media all and (max-width:540px){
        padding-top: 0em;
        
    }
`;
const ImageContiner = Styled.ul`
    display: flex;
    align-items: center;
    padding-inline-start: unset;
    @media all and (max-width:360px){
        padding-inline-start: unset;
    }
    @media all and (max-width:480px){
        padding-inline-start: unset;
    }
    @media all and (max-width:540px){
        padding-inline-start: unset;
    }
    @media all and (max-width:680px){
        padding-inline-start: unset;
    }
    @media all and (max-width:768px){
        padding-inline-start: unset;
    }
    @media all and (max-width:980px){
        padding-inline-start: unset;
    }
`;
const ImageItems = Styled.li`
    list-style: none;
    width: 5%;
    margin-right: 20px;
    @media all and (max-width:680px){
        width: 6%;
    }
    @media all and (max-width:980px){
       width: 6%; 
    }
    @media all and (max-width:768px){
        width: 6%;
    }
    @media all and (max-width:680px){
        width: 7%;
    }
    @media all and (max-width:680px){
        width: 10%;
    }
    @media all and (max-width:680px){
        margin-right: 5px;
        width: 12%;
    }
    @media all and (max-width:360px){
        margin-right: 10px;
        width: 8%;
    }
     
`;

const LogoImg = Styled.img`
    display: block;
    width: 100%;
`;
const SubHeading = Styled.p`
    font-size: 30px;
    font-weight: 200;
    @media all and (max-width:980px){
        font-size:20px
    }
    @media all and (max-width:768px){
        font-size:18px
    }
    @media all and (max-width:680px){
        font-size:16px
    }
`;
const Paragraph= Styled.p`
    margin-top: 25px;
    font-weight: 100;
    margin-bottom: 35px;
    @media all and (max-width:980px){
        font-size:10px
    }
    @media all and (max-width:768px){
        font-size:10px
    }
`;
const Button = Styled.a`
    padding: 15px 50px;
    border-radius: 20px;
    margin-right: 20px;
    background-color: #FFE338;
    border: none;
    color:#000;
    @media all and (max-width:680px){
        padding: 12px 45px;
    }
    @media all and (max-width:680px){
        padding: 10px 40px;
        font-size: 15px;
    }
    @media all and (max-width:360px){
        padding: 11px 25px;
        font-size: 13px;
        margin-bottom: 15px;
    }
`;






