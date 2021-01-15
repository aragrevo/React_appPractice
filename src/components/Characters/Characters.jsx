import React, { useEffect, useState } from 'react';

import { Row, Col, Divider } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const { results } = await response.json();
    console.log(results);
    setCharacters(results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Row gutter={[16, 16]} justify='space-around'>
      {characters.map((character) => (
        <Col span={4} key={character.id}>
          <Card
            hoverable
            cover={<img alt={character.name} src={character.image} />}
            style={{ width: 300 }}
          >
            <Meta title={character.name} description={character.gender} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
