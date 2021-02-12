import React from 'react';
import providers from '../../others/providersList';
import { ItemCard, Poster, Info, Offers, Year, Provider } from './styles';

const Item = ({ poster, title, original_release_year, offers, id }) => {
  let haveData = false;
  const getProviders = () => {
    const prov = {};
    const provNames = [];
    if (offers) {
      for (const e of offers) {
        if (
          e.monetization_type === 'flatrate' &&
          provNames.indexOf(providers[e.provider_id]) === -1
        ) {
          provNames.push(providers[e.provider_id].name);
          prov[
            providers[e.provider_id].name
          ] = `https://images.justwatch.com${providers[
            e.provider_id
          ].icon.replace('{profile}', 's100')}`;

          haveData = true;
        }
      }
      return prov;
    }
  };
  const offersList = getProviders();
  if (haveData) {
    return (
      <ItemCard className="item">
        <Poster
          src={`https://images.justwatch.com${poster.replace(
            '{profile}',
            's592'
          )}`}
          alt={title}
          className="poster"
        />
        <Info className="info">
          <h2>
            {title}
            <Year className="year"> ({original_release_year})</Year>
          </h2>
          <Offers className="offers">
            {Object.keys(offersList).map((e) => (
              <Provider className="provider">
                <img
                  style={{ borderRadius: '10px' }}
                  src={offersList[e]}
                  alt={e}
                  className="providerImage"
                />
                <p className="providerName">{e}</p>
              </Provider>
            ))}
          </Offers>
        </Info>
      </ItemCard>
    );
  }
  return '';
};

export default Item;
