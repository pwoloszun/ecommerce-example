import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import AccountSettings from 'src/domain/account/AccountSettings';
import Cart from 'src/domain/order/Cart';

export default function Header(): React.ReactElement {
  return (
    <HeaderCont>
      <Row>
        <Col sm={8}>EFA Header</Col>
        <Col sm={2} className="mx-0 px-0">
          <AccountSettings />
        </Col>
        <Col sm={2} className="mx-0 px-0">
          <Cart />
        </Col>
      </Row>
    </HeaderCont >
  );
}

const HeaderCont = styled.div`
  background-color: #232F3E;
  color: #fff;
  padding: 12px 20px;
`;
