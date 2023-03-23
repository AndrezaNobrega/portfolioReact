import React from 'react';
import styled from 'styled-components';

// rfc

const Header = styled.div `
background-color: #CCCC;
position: relative;
justify-content: space-between;
display: flex;
width: 100%;
height: 60px;
align-items: center;
`
const Item = styled.div `
font-size: 14px;
font-family: 'Read';
font-weight: bold;
color: #585123;
padding: 10px;
`
function header() {
  return (
    <Header>
        <Item>Home</Item>
        <Item>Contact Us</Item>
        <Item>About</Item>
    </Header>
  )
}

export default header;