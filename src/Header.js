import React, { Component } from 'react';
import logo from './logo.svg';
import { Bootstrap, Grid, Row, Col, Forms } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Grid fluid>
                    <Row>
                        <div className="header">
                            <Grid>
                                <Row>
                                    <Col xs={12} md={3}>
                                        <div className="logo">
                                            <Logo hyperlink={"http://www.google.com"} image="https://www.ultimatefinance.co.uk/assets/logos/uf-main-logo.gif" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="navigation">
                                            <ul>
                                                <Navigation hyperlink={"http://www.google.com"} title="Our Story" />
                                                <Navigation hyperlink={"http://www.google.com"} title="Our Products" />
                                                <Navigation hyperlink={"http://www.google.com"} title="Our Customers" />
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div>
                                            <a className="cta">Instant Quote</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </Row>
                </Grid>
            </header>
        );
    }
}

class Logo extends Component {
    render() {
        return (
            <a href={this.props.hyperlink}>
                <img src={this.props.image} />
            </a>
        );
    }
}

class Navigation extends Component {
    render() {
        return (
            <li><a href={this.props.hyperlink}>{this.props.title}</a></li>
        );
    }
}