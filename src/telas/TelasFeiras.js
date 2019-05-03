import React, { Component } from 'react';
import { Container, Header, Text, Title, Body, Left, Right, Content } from 'native-base';
import Feira from '../componentes/Feira'
export default class TelaFeiras extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#088A4B', }}>
                    <Body style={{ alignItems: 'center' }}>
                        <Title style={{ fontWeight: 'bold', fontSize: 20 }}>Feiras</Title>
                    </Body>
                </Header>
                <Content>
                    {
                        Feiras.map(feira => <Feira
                            descricao={feira.localizacao.descricao}
                            logradouro={feira.localizacao.logradouro}
                            inicio={feira.data.inicio}
                            fim={feira.data.fim}
                        />)
                    }
                </Content>
            </Container>
        );
    }
}

const Feiras = [
    {
        localizacao: {
            descricao: "Prefeitura",
            logradouro: "Rua do contorno"
        },
        data: {
            inicio: '10/02/2019',
            fim: '10/02/2019'
        }

    },

    {
        localizacao: {
            descricao: "Praça do girassol",
            logradouro: "Rua 02 de maio"
        },
        data: {
            inicio: '10/03/2019',
            fim: '10/03/2019'
        }

    }

];