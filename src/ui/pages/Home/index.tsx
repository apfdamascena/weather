import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import {
  Container, TitleWrapper, Title, Subtitle,
  Image, PlacesContainer, TextButton,
} from './style';

import { World } from '../../assets';

export const Home: React.FC = () => {
  const places = ['Dallol', 'Fairbanks', 'Londres', 'Recife', 'Vancouver', 'Yakutsk'];
  const navigate = useNavigate();

  const userTapPlace = (name: string) => {
    navigate(`/weather/${name}`);
  };

  return (
    <Container>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Choose the place to know the temperature</title>
      </Helmet>

      <TitleWrapper>

        <Title>WEATHER</Title>
        <Subtitle>select a city</Subtitle>

      </TitleWrapper>

      <Image src={World} alt="world" />

      <PlacesContainer>
        {
          places.map((name) => (
            <TextButton
              key={name}
              onClick={() => {
                userTapPlace(name);
              }}
            >
              {name}
            </TextButton>
          ))
        }
      </PlacesContainer>

    </Container>
  );
};
