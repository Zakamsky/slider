import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    color: #464646;
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
`

const MenuItem = styled.div`
    color: #2a2a2a;
    font-size: 12px;
    font-weight:300;
    line-height: 24px;
    
    span {
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 700;
    }
`

const CallButton = styled.button`
    width: 176px;
    height: 48px;
    background-color: #3fc7db;
    border-radius: 30px
    color: #fff;
    font-size: 14px;
    font-weight: 400px;
`

class AddInfo extends React.Component {
    render() {
        return(
            <span>{this.props.info}</span>
        )
    }
}

class Menu extends React.Component {
    render(){
        return (
            <Row>
                <Col lg={3}>
                    <Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
                </Col>
                <Col lg={3} ljOffset={1}>
                    <MenuItem>
                        Пн-пт с 10 до 20, сб, вс, с 11 до 18
                        <AddInfo info="Ленинская 31" />
                    </MenuItem>
                </Col>
                <Col lg={3}>
                    <MenuItem>
                        Звонки принимаются 24 часа
                        <AddInfo info="8 (846) 922 55 44" />
                    </MenuItem>
                </Col>
                <Col lg={2}>
                    <CallButton>Заказать звонок</CallButton>
                </Col>
            </Row>
        )
    }
}
export default Menu