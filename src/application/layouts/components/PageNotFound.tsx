import React from 'react';
import styled from 'styled-components';

const NotFoundText = styled.h1`
  line-height: 4em;
  text-align: center;
`;

export default function PageNotFound() {
  return (
    <NotFoundText>
      404 Page Not Found
    </NotFoundText>
  );
}
