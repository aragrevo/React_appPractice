import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from 'react';

import { Button, Tooltip, Card, Row, Col } from 'antd';
import { HeartTwoTone, HeartOutlined } from '@ant-design/icons';
import { SearchBar } from '../SearchBar/SearchBar';
import { useCharacters } from '../../hooks/useCharacters';

const { Meta } = Card;

const initialState = {
  favorites: [],
};

const API = 'https://rickandmortyapi.com/api/character/';

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
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);
  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  };

  const handleRemove = (favorite) => {
    dispatch({ type: 'REMOVE_TO_FAVORITE', payload: favorite });
  };

  const isFavorite = (character) =>
    favorites.favorites.some((fav) => fav.id === character.id);

  const onSearch = useCallback(() => {
    setSearch(searchInput.current.input.value.toLowerCase());
  }, []);

  const filteredUsers = useMemo(
    () => characters.filter((user) => user.name.toLowerCase().includes(search)),
    [characters, search]
  );

  return (
    <>
      <SearchBar
        search={search}
        searchInput={searchInput}
        onSearch={onSearch}
      />

      <Row gutter={[16, 16]} justify="space-around">
        {filteredUsers.map((character) => (
          <Col span={4} key={character.id}>
            <Card
              hoverable
              cover={<img alt={character.name} src={character.image} />}
              style={{ maxWidth: 300 }}
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
                    <Tooltip title="remove favorite">
                      <Button
                        onClick={() => handleRemove(character)}
                        type="primary"
                        shape="circle"
                        icon={<HeartTwoTone />}
                      />
                    </Tooltip>
                  ) : (
                    <Tooltip title="add favorite">
                      <Button
                        onClick={() => handleClick(character)}
                        type="primary"
                        shape="circle"
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
