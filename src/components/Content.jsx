import React from 'react';
import styled from 'styled-components';

// rfc

const ContentStyled = styled.main `

 height: 500px;
 box-sizing: border-box;
margin: 0;



`

const ContentItem = styled.p `
color: #585123;
font-family: "Read";
text-align: center;

`

function Content() {
  return (
    <>
        <ContentStyled>
            <ContentItem>
            As a dedicated learner, I am committed to staying up-to-date with the latest trends and technologies in web development, and am always seeking new challenges and opportunities to grow and expand my skillset. I am excited to join a team of like-minded individuals and contribute to the development of cutting-edge web applications.
            </ContentItem>
        </ContentStyled>
    </>
  )
}

export default Content;