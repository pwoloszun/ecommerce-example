import React from 'react';
import styled from 'styled-components';

export default function Footer(): React.ReactElement {
  return (
    <FooterCont>
      &copy; EFA Footer
    </FooterCont>
  );
}

const FooterCont = styled.div`
  background-color: #232F3E;
  color: #fff;
  text-align: center;
  padding: 140px 0 20px;
`;
