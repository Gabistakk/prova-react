import '../App.css'

import { NextUIProvider, Button, Navbar, Text, Card, Col, Row } from '@nextui-org/react'

import { Home, Setting, User } from 'react-iconly';

export default function HomeScreen() {
  return (
    <div className='content'>
<Card css={{ w: "15%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Compre Plantas
        </Text>
        <Text h4 color="white">
          Veja Plantas Na Promoção
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-3.jpeg"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
<Card css={{ w: "15%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Estilo!
        </Text>
        <Text h4 color="white">
          Veja os estilos Disponiveis!
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-4.jpeg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
    
  <Card css={{ bg: "$black", w: "15%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Eletronicos
        </Text>
        <Text h4 color="white">
          Veja Os LapTops em Promoção
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-2.jpeg"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
      </div>
  )
}
