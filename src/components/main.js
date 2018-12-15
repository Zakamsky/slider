import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

const Repair = styled.div`
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    line-height: 30px;
    
    span {
        display: block;
        font-size: 24px;
        line-height: 30px;
    }
`

const LightText = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    margin-top: 54px;
`

const CallBtn = styled.button`
    width: 247px;
    height: 67px;
    margin-top: 32px;
    background-color: #ffa14b;
    border-radius: 30px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

class Main extends React.Component {
    render(){
        return (
            <Row>
                <Col lg={5}>
                    <Repair>
                        Качественный Ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque dignissimos, dolores error et facere fugiat fugit inventore magni minima nam praesentium quisquam recusandae vitae!
                    </LightText>
                    <CallBtn>Отправить заявку</CallBtn>
                </Col>
                <Col lg={6} lgOffset={1}>

                </Col>
            </Row>
        )
    }
}
export default Main