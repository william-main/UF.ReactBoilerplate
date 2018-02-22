import React, { Component } from 'react';
import logo from './logo.svg';
import { Bootstrap, Grid, Row, Col, Forms } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Grid>
                    <Row>                 
                        <Col xs={12} md={2}>
                            
                        </Col>
                        <Col xs={12} md={4}>
                            <h1>Ultimate Finance</h1>
                            <ul>
                                <li><a href="">Our Story</a></li>
                                <li><a href="">Our Products</a></li>
                                <li><a href="">Our Customers</a></li>
                                <li><a href="">Good Funding</a></li>
                                <li><a href="">Business Advisors</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">FAQs</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Legals</a></li>
                                <li><a href="">Graduate Scheme</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Client Login</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <h1>Partners &amp; Awards</h1>
                            <img src="" />
                            <img src="" />
                            <img src="" />
                        </Col>
                        <Col xs={12} md={3}>
                            <h1>Connect with us</h1>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                            <div className="trustpilot-footer">
                                <div className="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="59669f240000ff0005a68a45" data-style-height="150px" data-style-width="100%" data-theme="light">
                                    <a href="https://uk.trustpilot.com/review/ultimatefinance.co.uk" target="_blank">Trustpilot</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        );
    }
}