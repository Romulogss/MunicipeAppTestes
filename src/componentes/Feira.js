import React, { Component } from 'react';
import { Text, Card, CardItem, Body, Button } from 'native-base';

export default class Feira extends Component {
    render() {
        return (
            <Card style={{ height: 155, marginBottom: 25, marginTop: 10 }}>
                <CardItem header style={Estilos.headerCardFooter}>
                    <Text>Descroção: {this.props.descricao}</Text>
                    <Text>Logradouro: {this.props.logradouro}</Text>
                </CardItem>

                <CardItem style={{}}>
                    <Body>
                        <Text>Aqui vai ter outras informações</Text>
                    </Body>
                </CardItem>

                <CardItem footer style={Estilos.headerCardFooter}>
                    <Text>Inicio: {this.props.inicio}</Text>
                    <Text>Fim: {this.props.fim}</Text>
                </CardItem>

            </Card>
        );
    }
}

const Estilos = {
    headerCardFooter: {
        flexDirection: "column",
        height: 55,
        //paddingBottom: 10,
        backgroundColor: '#088A4B',
        justifyContent: 'center'
    }
}