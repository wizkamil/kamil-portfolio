import React from 'react'
import Header from '../Includes/Header';
import { Helmet } from 'react-helmet';

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
    <Helmet>
        <title>Contact</title>
    </Helmet>
        <Header />
        <Continer>
            <SubContainer>
                 <Heading>Hello there !</Heading>
                    <Paragraph>
                        Love to hear from you,
                        Get in touch
                    </Paragraph>
                    <Form  method='POST' action='https://getform.io/f/86695a72-2772-4074-9020-c0c9478ebbb1'>
                        <InputContainer>
                            <FromHeading>Name:</FromHeading>
                            <InputText
                                type="text"
                                 placeholder=""
                                 name="name"
                                
                            />
                        </InputContainer>
                        <InputContainer>
                            <FromHeading>Email:</FromHeading>
                            <InputText
                            type="email"
                             placeholder=""
                             name="email"
                                
                            />
                        </InputContainer>
                        <InputContainer>
                            <FromHeading>Phone:</FromHeading>
                            <InputText
                            type="text"
                             placeholder=""
                             name="phone no"
                                
                            />
                        </InputContainer>
                        <InputContainer>
                            <FromHeading>Location:</FromHeading>
                            <InputText
                            type="text"
                                placeholder=""
                                name="location"
                        />
                        </InputContainer>
                        <InputContainer>
                            <FromHeading>Massage:</FromHeading>
                            <InputText
                            type="text"
                            placeholder=""
                            name="massage"
                        />
                        </InputContainer>
                        <Button>send</Button>
                    </Form>
               </SubContainer>
        </Continer>
    </>
  )
}

const Continer = Styled.div`
    margin-top: 8%;
    margin-left: 20%;
`;
const SubContainer= Styled.div`
`;
const Heading = Styled.h2`
    font-size: 25px;
`;
const Paragraph = Styled.p`
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 5em;
    @media all and (max-width:768px){
      font-size:14px;
}
@media all and (max-width:360px){
    font-size:11px;
}
`;
const Form = Styled.form`
    margin-bottom: 5em;
`;
const InputContainer = Styled.div`
    margin-bottom: 20px;
`;
const FromHeading = Styled.p`
`;
const InputText= Styled.input`
    padding: 20px 25px 20px 30px;
    width : 27%;
    border-radius: 10px;
    font-size: 14px;
    color:#000;
    border: 2px solid #000;

    @media all and (max-width:768px){
        padding: 20px 80px;
    }
    @media all and (max-width:360px){
        padding: 12px 60px;
       }
    @media all and (max-width:320px){
        padding: 10px 55px;
    }
`;
const Button = Styled.button`
    padding: 10px 30px;
    border-radius: 15px;
    margin-right: 20px;
    border: 1px solid #000;
    border: ;
    color:#000;
    margin-left: 24.5%;
    @media all and (max-width:320px){
        margin-left: 20%;
        padding: 6px 18px;
    }
    @media all and (max-width:360px){
        margin-left: 19.5%;
        padding: 6px 18px;
    }
`;




