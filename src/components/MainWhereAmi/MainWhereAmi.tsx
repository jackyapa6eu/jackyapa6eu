import { Map, Placemark, YMaps } from 'react-yandex-maps';
import React, { memo } from 'react';
import Info from '../../containers/Info/Info';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  height: 278px;
  border-radius: 10px;
  overflow: hidden;
`;

const MainWhereAmi = () => {
  return (
    <Info title='Где'>
      <YMaps query={{ apikey: '7df7c647-19ce-4160-b9ee-cf7ef1a51a53' }}>
        <MapContainer>
          <Map
            defaultState={{
              center: [55.753987617453504, 37.6207735531773],
              zoom: 10,
            }}
            width='100%'
            height='100%'
          >
            <Placemark geometry={[55.753987617453504, 37.6207735531773]} />
          </Map>
        </MapContainer>
      </YMaps>
    </Info>
  );
};

export default memo(MainWhereAmi);
