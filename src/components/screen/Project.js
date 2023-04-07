import React from 'react'
import Header from '../Includes/Header';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Mac from '../images/mac.webp';
import Noname from "../images/noname.webp"
import Plante from "../images/plante.webp"
import Find from "../images/find.webp"
import Ecommerce from "../images/e-commerse.jpg"



import styled from 'styled-components';

export default function Project() {
  return (
    <>
    <Helmet>
        <title>Project</title>
    </Helmet>
    <Header />
    <Container>
      <SubContainer>
        <ProjectImages className='hover'>
            <Links href="https://wizkamil.github.io/iphone/">
              <Images>
                  <Img src={Mac} />
              </Images>
                <SubHeading>i phone</SubHeading>
                  <Paragraph>The iPhone is made on a global scale, and it blends computers, the Internet, communications, and artificial intelligence in one blockbuster, game-changing innovation. It reflects so many of the things that our contemporary world is good at - indeed, great at.
                  </Paragraph>
            </Links>
          </ProjectImages>
          <ProjectImages className='hover'>
            <Links href="https://wizkamil.github.io/Noname//">
              <Images>
                <Img src={Noname} />
              </Images>
                <SubHeading>Noname</SubHeading>
                <Paragraph>People tend to think of the web as a way to get information or perhaps as a place to carry out ecommerce. But really, the web is about accessing applications. Think of each website as an application, and every single click, every single interaction with that site, is an opportunity to be on the very latest version of that application</Paragraph>
            </Links>
          </ProjectImages>
          <ProjectImages className='hover'>
            <Links href="https://wizkamil.github.io/Casasite/">
              <Images>
                <Img src={Plante} />
              </Images>
                <SubHeading>Casa</SubHeading>
                <Paragraph>Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door</Paragraph>
            </Links>
          </ProjectImages>
          <ProjectImages className='hover'>
            <Links href="https://wizkamil.github.io/Findtrend/">
                <Images>
                  <Img src={Find} />
                </Images>
                <SubHeading>Find</SubHeading>
                <Paragraph>website should be designed such that a visitor should go the cart with confidence and not to your contact page with confusion</Paragraph>
            </Links>
        </ProjectImages>
            <ProjectImages className='hover'>
            <Links href="https://wizkamil.github.io/E-commerse/">
                <Images>
                  <Img src={Ecommerce} />
                </Images>
                <SubHeading>E-commerce</SubHeading>
                <Paragraph>website should be designed such that a visitor should go the cart with confidence and not to your contact page with confusion</Paragraph>
            </Links>
        </ProjectImages>
      </SubContainer>
    </Container>
    </>
  )
}
const Container =styled.div``;
const SubContainer =styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top:80px;
  @media all and (max-width:768px) {
    flex-direction: column;
 }
  @media all and (max-width:320px) {
    margin-top: 10px;
    padding: 10px;
}
@media all and (max-width:360px) {
  margin-top: 10px;
  padding: 10px;
}
`;
const Links =styled.a`
`;
const ProjectImages =styled.li`
  width: 20%;
  list-style: none;
  margin-right: 30px;
  border: 1px solid #D3D3D3;
  border-radius: 8px;
  padding: 7px;
  @media all and (max-width:768px) {
    margin: 0 auto;
    width: 40%;
  }
  @media all and (max-width:360px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  @media all and (max-width:320px) {
    width: 92%;
    margin-bottom: 10px;
  }
 `;
const Img =styled.img`
  display:block;
  width:100%;
`;
const Images =styled.div`
  border-radius: 5px; 
  overflow: hidden;

`;
const SubHeading = styled.p`
  text-align: center;
  color:#000;
  font-weight: bold;
`;
const Paragraph = styled.p`
  color:#000;
  font-size: 10px;
`;
