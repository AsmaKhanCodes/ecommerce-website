import React from 'react'
import styled from 'styled-components'
import { desktop, largeScreen, mobile, tablet } from '../Responsive';


const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  
  ${mobile({
    height: "25px",
    fontSize: "12px",
  })};

  ${tablet({
    height: "30px",
    fontSize: "13px",
  })};

  ${desktop({
    height: "40px",
    fontSize: "16px",
  })};
  
  ${largeScreen({
    height: "45px",
    fontSize: "18px",
  })};
`;


const Announcements = () => {
  return (
    <Container>Super Deal! Fre Shipping on Orders Over $50</Container>
  )
}

export default Announcements