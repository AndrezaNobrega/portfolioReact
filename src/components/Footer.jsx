import React from 'react';
import styled from 'styled-components';
// import { Container } from './styles';

 const Footer = styled.footer `
 position: absolute;
 bottom: 0;
 left: 0;
 height: 40px;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #cccc;
 height: 90px;


 `
 const Itemfooter = styled.div `
 text-decoration: none;
 font-size: 16px;
 color: #585123;`


 function footer() {
    return (
      <Footer>
          <Itemfooter>Styled Components Study</Itemfooter>

      </Footer>
    )
  }
  
  export default footer;