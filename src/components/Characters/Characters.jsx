import React, { useEffect, useState, useReducer } from 'react';

import { Row, Col } from 'antd';
import { Button, Tooltip } from 'antd';
import { Card } from 'antd';
import { SmileTwoTone, HeartTwoTone, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_TO_FAVORITE':
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((x) => x.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const { results } = await response.json();
    console.log(results);
    setCharacters(results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  };

  const handleRemove = (favorite) => {
    dispatch({ type: 'REMOVE_TO_FAVORITE', payload: favorite });
  };

  const isFavorite = (character) => {
    return favorites.favorites.some((fav) => fav.id === character.id);
  };

  return (
    <>
      <Row gutter={[16, 16]} justify='space-around'>
        {characters.map((character) => (
          <Col span={4} key={character.id}>
            <Card
              hoverable
              cover={<img alt={character.name} src={character.image} />}
              style={{ width: 300 }}
              bodyStyle={
                isFavorite(character)
                  ? { backgroundColor: 'wheat' }
                  : { backgroundColor: 'white' }
              }
            >
              <Meta
                title={character.name}
                description={character.gender}
                style={isFavorite(character) ? { color: 'white' } : {}}
                avatar={
                  isFavorite(character) ? (
                    <Tooltip title='remove favorite'>
                      <Button
                        onClick={() => handleRemove(character)}
                        type='primary'
                        shape='circle'
                        icon={<HeartTwoTone />}
                      />
                    </Tooltip>
                  ) : (
                    <Tooltip title='add favorite'>
                      <Button
                        onClick={() => handleClick(character)}
                        type='primary'
                        shape='circle'
                        icon={<HeartOutlined />}
                      />
                    </Tooltip>
                  )
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </Row>
    </>
  );
};
