import { Col, Row } from 'antd';
import Creation from './creation';

const creations = [
  {
    title: 'FIFA Bracket',
    description: 'Predict the 2022 FIFA world cup results',
    coverSrc: '/feras-wheel.png',
    href: 'www.level20.com'
  },
  {
    title: 'FIFA Bracket',
    description: 'Predict the 2022 FIFA world cup results',
    coverSrc: '/feras-wheel.png',
    href: 'www.level20.com'
  },
  {
    title: 'FIFA Bracket',
    description: 'Predict the 2022 FIFA world cup results',
    coverSrc: '/feras-wheel.png',
    href: 'www.level20.com'
  },
  {
    title: 'FIFA Bracket',
    description: 'Predict the 2022 FIFA world cup results',
    coverSrc: '/feras-wheel.png',
    href: 'www.level20.com'
  },
  {
    title: 'FIFA Bracket',
    description: 'Predict the 2022 FIFA world cup results',
    coverSrc: '/feras-wheel.png',
    href: 'www.level20.com'
  },
  {
    title: 'FIFA Bracket',
    description: 'Predict the 2022 FIFA world cup results',
    coverSrc: '/feras-wheel.png',
    href: 'www.level20.com'
  }
];

const CreationContainer = () => {
  return (
    <Row>
      {creations.map(creation => (
        <Col span={8}>
          <Creation 
            title={creation.title}
            description={creation.description}
            coverSrc={creation.coverSrc}
            href={creation.href}/>
        </Col>
      ))}      
    </Row>
  )
}

export default CreationContainer;