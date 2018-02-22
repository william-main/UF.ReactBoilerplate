import React, { Component } from 'react';
import logo from './logo.svg';
import './nouislider.min.css';
import Header from './Header';
import Footer from './Footer';
import Nouislider from 'react-nouislider';
import { Bootstrap, Grid, Row, Col, Forms } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Footer />
            </div>
        );
    }
}

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            AdvanceAmount: "5000",
            MaxAllowedAdvance: "50000"
        };
    }

    render() {
        return (
            <form>
                <Grid>
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <Row className="fluid">
                                <Col md={12}>
                                    <input type="text" data-min="5000" data-start={this.state.AdvanceAmount} data-max={this.state.MaxAllowedAdvance} id="amountInputMobile" name="amount" className="amount-input" value={this.state.AdvanceAmount} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </form>
        );
    }

}

export default App;
