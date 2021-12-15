import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import MainMenu from './components/MainMenu';
import MainContent from './components/MainContent';

export default function AppLayout(): React.ReactElement {
  return (
    <Container fluid>
      <Row as="header">
        <Header />
        <MainMenu />
      </Row>
      <Row as="main">
        <Col className="mainCont">
          <MainContent />
        </Col>
      </Row>
      <Row as="footer">
        <Footer />
      </Row>
    </Container>
  );
}
