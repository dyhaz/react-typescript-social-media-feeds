import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center my-4">My Feeds</h2>
                </Col>
            </Row>
            <Row className="custom-row">
                <Col md={6}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/500x300.png?text=Image+1"
                        />
                        <Card.Body>
                            <Card.Title>Post Title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/500x300.png?text=Image+2"
                        />
                        <Card.Body>
                            <Card.Title>Post Title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="custom-row">
                <Col md={6}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/500x300.png?text=Image+3"
                        />
                        <Card.Body>
                            <Card.Title>Post Title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/500x300.png?text=Image+4"
                        />
                        <Card.Body>
                            <Card.Title>Post Title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
