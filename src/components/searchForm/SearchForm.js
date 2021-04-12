import React from 'react'
import { Form, Row, Col, Image, Card, Container } from 'react-bootstrap'

function SearchForm() {
    return (

        <div className='container py-4'>
            <Row>
                <Col sm='12' md='12' lg='6' >
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Form.Group>
                                    <Form.Control as="select">
                                        <option>Select model</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                    <br />
                                    <Form.Control as="select" placeholder='Select model'>
                                        <option>Select model</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                    <br />
                                    <Form.Control as="select" placeholder='Select part'>
                                        <option>Select part</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Card.Body>

                        </Card>

                    </div>
                </Col>
                <Col sm='12' md='12' lg='6'>
                    <div>
                        <Image src='https://cdn.autodoc.de/uploads/construct_banner/4298/atd/22476/banner_image__lt.jpg' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SearchForm
